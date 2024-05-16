//
//  paymentContentView.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/15/24.
//

import SwiftUI
import StoreKit

struct paymentContentView: View {
    @StateObject private var store = Store()
    @AppStorage(Persistence.consumablesCountKey) var consumablesCount: Int = 0
    weak var delegate: paymentViewController!
    var model: PaymentModel
   
    var body: some View {
        NavigationStack {
            Form {
                Section(header: Text("You have")) {
                    HStack {
                        Spacer()
                        ProductView(icon: "❤️", quantity: "\(consumablesCount)")
                        Spacer()
                        ProductView(icon: "🥌", quantity: "\(store.purchasedNonConsumables.count)")
                        Spacer()
                        ProductView(icon: "📺", quantity: "0")
                        Spacer()
                        ProductView(icon: "⚽️", quantity: "0")
                        Spacer()
                    }
                }
                
                Section(header: Text("To buy")) {
                    ForEach(store.products) { product in
                        HStack {
                            Text(product.displayName)
                            Spacer()
                            Button("\(product.displayPrice)") {
                                Task {
                                    try await store.purchase(product)
                                }
                            }
                        }
                    }
                }
                
                Button("Restore purhases") {
                    
                }
                NavigationLink("Support", destination: SupportView())
            }
        }
        VStack {
            Text(model.text)
            Button("Close") {
                print("Hello")
                delegate.handlePaymentDone()
            }
        }
        
    }
}

#Preview {
    paymentContentView(model: PaymentModel(text:"50GB"))
}
