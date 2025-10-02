// swift-tools-version: 5.9
import PackageDescription

// Version is set during release process
// When developing locally in monorepo, the version is read from package.json/info.json
// When published to GitHub, the version must be hardcoded
let version = "7.6.1"

let package = Package(
    name: "ScanditCapacitorDatacaptureId",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "ScanditCapacitorDatacaptureId",
            targets: ["ScanditIdNative"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0"),
        .package(url: "https://github.com/Scandit/scandit-capacitor-datacapture-core.git", exact: Version(stringLiteral: version)),
        .package(url: "https://github.com/Scandit/scandit-datacapture-frameworks-id.git", exact: Version(stringLiteral: version)),
    ],
    targets: [
        .target(
            name: "ScanditIdNative",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                .product(name: "ScanditCapacitorDatacaptureCore", package: "scandit-capacitor-datacapture-core"),
                .product(name: "ScanditFrameworksId", package: "scandit-datacapture-frameworks-id"),
            ],
            path: "ios/Sources/ScanditIdNative"),
        .testTarget(
            name: "ScanditIdNativeTests",
            dependencies: ["ScanditIdNative"],
            path: "ios/Tests/ScanditIdNativeTests")
    ]
)
