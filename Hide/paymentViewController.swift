//
//  paymentViewController.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/15/24.
//

import UIKit

class paymentViewController: UIViewController {
    private let backButton = UIButton()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initialSetup()
    }
    
    private func initialSetup() {
        // basic setup
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
    
    @objc private func handleBackButtonTapped() {
        self.dismiss(animated: true)
    }
}
