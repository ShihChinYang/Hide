//
//  paymentModel.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/15/24.
//

import Combine

class PaymentModel: ObservableObject {
    @Published var text: String
    
    init(text: String) {
        self.text = text
    }
}
