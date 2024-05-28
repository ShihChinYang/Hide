//
//  checkout.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/28/24.
//

import StoreKit

class Checkout {
    let delegate: ViewController
    var products = [Product]()
    var productIDs = [String]()
    
    init(forController viewController: ViewController, forProduct id: String) {
        delegate = viewController
        productIDs.append(id)
    }
    
    func getProducts() {
        Task {
            await requestProducts()
        }
    }
    
    @MainActor
    func requestProducts() async {
        do {
            products = try await Product.products(for: productIDs)
            let product = products[0]
            try await purchase(product)
            print(products)
        } catch {
            print(error)
        }
    }
    
    @MainActor
    func purchase(_ product: Product) async throws {
        let uuid = UUID();
        let token = Product.PurchaseOption.appAccountToken(uuid);
        let result = try await product.purchase(options: [])
        
        switch result {
        case .success(let transactionVerification):
            await self.handle(transactionVerification: transactionVerification)
        default:
            return
        }
    }
    
    @MainActor
    private func handle(transactionVerification result: VerificationResult <Transaction>) async {
        switch result {
        case let .verified(transaction):
            guard
                let product = self.products.first(where: {
                    $0.id == transaction.productID
                })
            else {
                return
            }
            print(transaction.appBundleID)
            print(transaction.purchasedQuantity)
            await transaction.finish()
            return
        default:
            return
        }
    }
}
