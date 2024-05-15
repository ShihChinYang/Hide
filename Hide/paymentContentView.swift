//
//  paymentContentView.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/15/24.
//

import SwiftUI

struct paymentContentView: View {
    weak var delegate: paymentViewController!
    @ObservedObject var model: PaymentModel
   
    var body: some View {
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
