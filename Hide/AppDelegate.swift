//
//  AppDelegate.swift
//  Hide
//
//  Created by MacBook Pro - SYang on 5/2/24.
//

import UIKit

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    let webServer = GCDWebServer()

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        let subdir = Bundle.main.resourceURL!.appendingPathComponent("out").path
        webServer.addGETHandler(forBasePath: "/", directoryPath: subdir, indexFilename: "index.html", cacheAge: 3600, allowRangeRequests: true)
        do {
            try webServer.start(options:[
                "Port": 8080,
                "BindToLocalhost": true
            ])
        } catch {
            fatalError("Can't start GCD web server")
        }
        return true
    }

    // MARK: UISceneSession Lifecycle

    func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        // Called when a new scene session is being created.
        // Use this method to select a configuration to create the new scene with.
        return UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
    }

    func application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>) {
        // Called when the user discards a scene session.
        // If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
        // Use this method to release any resources that were specific to the discarded scenes, as they will not return.
    }


}

