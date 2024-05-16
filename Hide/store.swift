//
//  store.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/16/24.
//

import StoreKit

class Store: ObservableObject {
    var transactionListener: Task<Void, Error>?
    private var productIDs = ["draw", "oneMonth"]
    @Published var products = [Product]()
    @Published var purchasedNonConsumables = Set<Product>()
    @Published var purchasedConsumables = [Product]()
    
    init() {
        transactionListener = listenForTransaction()
        Task {
            await requestProducts()
            await updateCurrentEntitlements()
        }
    }
    @MainActor
    func requestProducts() async {
        do {
            products = try await Product.products(for: productIDs)
        } catch {
            print(error)
        }
    }
    
    private func addPurchased(_ product: Product) {
        switch product.type {
        case .consumable:
            purchasedConsumables.append(product)
            Persistence.increaseConsumablesCount()
        case .nonConsumable:
            purchasedNonConsumables.insert(product)
        default:
            return
        }
    }
    
    @MainActor
    func purchase(_ product: Product) async throws {
        let result = try await product.purchase()
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
            self.addPurchased(product)
            await transaction.finish()
        default:
            return
        }
    }
    
    func listenForTransaction() -> Task <Void, Error> {
        return Task.detached {
            for await result in Transaction.updates {
                await self.handle(transactionVerification: result)
            }
        }
    }
    
    private func updateCurrentEntitlements() async {
        for await result in Transaction.currentEntitlements {
            await self.handle(transactionVerification: result)
        }
    }
}
