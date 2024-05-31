//
//  ViewController.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/2/24.
//

import UIKit
import WebKit
import StoreKit

class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler{
    
    var webView: WKWebView!
    var timer: Timer!
    var appLoaded: Bool = false
    
    @objc func fireTimer() {
        print("Timer fired!")
        if appLoaded == false {
            webView?.reload();
        } else {
            timer.invalidate();
        }
    }
    
    override func loadView() {
        let webViewConfiguration = WKWebViewConfiguration();
        webViewConfiguration.limitsNavigationsToAppBoundDomains = true;
        webView = WKWebView(frame: .zero, configuration: webViewConfiguration)
        webView.navigationDelegate = self
        webView.uiDelegate = self
        //webView.isInspectable = true
        let contentController = webView.configuration.userContentController
        contentController.add(self, name: "toggleMessageHandler")
        view = webView
        timer = Timer.scheduledTimer(timeInterval: 3.0, target: self, selector: #selector(fireTimer), userInfo: nil, repeats: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let url = URL(string: "http://localhost:8080/apps/colors.html")!
        webView.load(URLRequest(url: url))
        webView.allowsBackForwardNavigationGestures = true
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let dict = message.body as? [String : AnyObject] else {
            return
        }
    
        appLoaded = true
        print(dict)
        let localhostAccessKeyId = AccessKeyInfo.localhostAccessKeyId
        let localhostAccessKey = AccessKeyInfo.localhostAccessKey
        
        let script = "window.bsafesNative.accessKeyWebCall({localhostAccessKeyId:\"\(localhostAccessKeyId)\", localhostAccessKey:\"\(localhostAccessKey)\"});"

        webView.evaluateJavaScript(script) { (result, error) in
            if let result = result {
                print("Label is updated with message: \(result)")
            } else if let error = error {
                print("An error occurred: \(error)")
            }
        }
    }
    
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let ac = UIAlertController(title: nil,
                                   message: message,
                                   preferredStyle: .alert)
        ac.addAction(UIAlertAction(title: "Ok",
                                   style: .default) { _ in
            completionHandler()
        })
        present(ac, animated: true)
    }
    
    func webView(_ webView: WKWebView,
        runJavaScriptConfirmPanelWithMessage message: String,
        initiatedByFrame frame: WKFrameInfo,
        completionHandler: @escaping (Bool) -> Void) {
        let alertController = UIAlertController(title: nil, message: message, preferredStyle: .actionSheet)
        alertController.addAction(UIAlertAction(title: "Ok", style: .default, handler: { (action) in
                completionHandler(true)
            }))
        alertController.addAction(UIAlertAction(title: "Cancel", style: .default, handler: { (action) in
                completionHandler(false)
            }))
        self.present(alertController, animated: true, completion: nil)
    }
    
    private func checkout(_ productId: String) {
        let checkout = Checkout(forDelegate: self, forProduct: productId)
        checkout.purchase()
    }
    
    func handleCheckoutResult(_ transaction: Transaction?) {
        if let transaction {
            print(transaction)
            let script = "window.bsafesNative.transactionWebCall({id:\"\(transaction.id)\", originalId:\"\(transaction.originalID)\"});"

            webView.evaluateJavaScript(script) { (result, error) in
                if let result = result {
                    print("Label is updated with message: \(result)")
                } else if let error = error {
                    print("An error occurred: \(error)")
                }
            }
        }
    }
    
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if navigationAction.navigationType == .linkActivated  {
            if let url = navigationAction.request.url, let host = url.host {
                let path = url.path
                print(url)
                print(host)
                print(path)
                if path == "/services/checkout", UIApplication.shared.canOpenURL(url) {
                    //UIApplication.shared.open(url)
                    /*let alertController = UIAlertController(title: nil, message: "Hello!", preferredStyle: .actionSheet)
                    self.present(alertController, animated: true, completion: nil)*/
                    if let productId = url.query {
                        checkout(productId)
                    }
                    decisionHandler(.cancel)
                    return
                } else {
                    decisionHandler(.allow)
                    return
                }
            }
        } else {
            print("not a user link")
            decisionHandler(.allow)
            return
        }
    }
}

