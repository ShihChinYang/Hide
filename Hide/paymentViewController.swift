//
//  paymentViewController.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/15/24.
//

import UIKit
import SwiftUI

class paymentViewController: UIViewController {
    var planId: String = "None"
    weak var delegete: ViewController!
    
    private let backButton = UIButton()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        //initialSetup()
        addPaymentContentView()
    }
    
    fileprivate func addPaymentContentView() {
        let paymentContentView = paymentContentView(delegate:self, model: PaymentModel(text:planId))
        let paymentContenViewController = UIHostingController(rootView: paymentContentView)
        addChild(paymentContenViewController)
        view.addSubview(paymentContenViewController.view)
        paymentContenViewController.didMove(toParent: self)
        paymentContenViewController.view.translatesAutoresizingMaskIntoConstraints = false
        paymentContenViewController.view.topAnchor.constraint(equalTo: view.topAnchor).isActive = true
        paymentContenViewController.view.bottomAnchor.constraint(equalTo: view.bottomAnchor).isActive = true
        paymentContenViewController.view.leftAnchor.constraint(equalTo: view.leftAnchor).isActive = true
        paymentContenViewController.view.rightAnchor.constraint(equalTo: view.rightAnchor).isActive = true
    }
    
    private func initialSetup() {
        // basic setup
        print(planId)
        view.backgroundColor = .white
        navigationItem.title = "Payment"
        
        // button customization
        backButton.backgroundColor = .darkGray
        backButton.setTitle("Dismiss", for:  .normal)
        backButton.setTitleColor(.white, for: .normal)
        backButton.layer.cornerRadius = 8
        backButton.addTarget(self, action: #selector(handleBackButtonTapped), for: .touchUpInside)
        
        // adding the constraints to the button
        view.addSubview(backButton)
        backButton.translatesAutoresizingMaskIntoConstraints = false
        backButton.heightAnchor.constraint(equalToConstant: 50).isActive = true
        backButton.widthAnchor.constraint(equalToConstant: 200).isActive = true
        backButton.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        backButton.centerYAnchor.constraint(equalTo: view.centerYAnchor).isActive = true
    }
    
    func handlePaymentDone() {
        delegete.updatePurhcaseResult(result: planId)
        self.dismiss(animated: true)
    }
    
    @objc private func handleBackButtonTapped() {
        delegete.updatePurhcaseResult(result: planId)
        self.dismiss(animated: true)
    }
}
