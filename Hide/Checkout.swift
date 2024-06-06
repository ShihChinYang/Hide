//
//  checkout.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/28/24.
//

import StoreKit

class Checkout {
    let delegate: ViewController
    let clientSecret: String
    var products = [Product]()
    var productIDs = [String]()
    var transactionListener: Task<Void, Error>?
    
    init(forDelegate viewController: ViewController, forProduct id: String, withSecret secret: String) {
        delegate = viewController
        productIDs.append(id)
        clientSecret = secret
        transactionListener = listenForTransactions()
    }
    
    func purchase() {
        Task {
            await requestForProduct()
        }
    }
    
    @MainActor
    func requestForProduct() async {
        do {
            products = try await Product.products(for: productIDs)
            let product = products[0]
            try await purchase(product)
        } catch {
            print(error)
        }
    }
    
    @MainActor
    func purchase(_ product: Product) async throws {
        let result = try await product.purchase(options: [])
        switch result {
        case .success(let transactionVerification):
            _ = await self.handle(transactionVerification: transactionVerification)
            return
        case .pending:
            return
        case .userCancelled:
            delegate.handleCheckoutError("Cancelled")
            return
        default:
            return
        }
    }
    
    @MainActor
    private func handle(transactionVerification result: VerificationResult <Transaction>) async -> Transaction? {
        switch result {
        case let .verified(transaction):
            guard
                self.products.first(where: {
                    $0.id == transaction.productID
                }) != nil
            else {
                return nil
            }
            delegate.handleCheckoutResult(transaction)
            await transaction.finish()
            return transaction
        default:
            delegate.handleCheckoutError("Invalid transaction")
            return nil
        }
    }
    
    func listenForTransactions() -> Task <Void, Error> {
        return Task.detached {
            for await result in Transaction.updates {
                _ = await self.handle(transactionVerification: result)
            }
        }
    }
}
