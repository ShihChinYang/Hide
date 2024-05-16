//
//  productView.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/16/24.
//

import SwiftUI

struct ProductView: View {
    var icon: String
    var quantity: String
    
    var body: some View {
        VStack {
            Text(icon)
            Text(quantity)
        }
        .padding()
    }
}
