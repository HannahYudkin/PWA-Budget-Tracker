const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: {
        app: "/public/index.js",
        database: "/public/db.js",
        transaction: "/model/transanction.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/present-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new WebpackPwaManifest({
            filename: "manifest.json",
            inject: false,
            fingerprints: false, 
            name: "PWA Budget Tracker",
            short_name: "Budget Tracker",
            description: "An PWA application to track your budget.",
            background_color: "#C3EDEA",
            theme_color: "#ffffff",
            start_url: "/"
        })
    ]
};

module.exports = config;