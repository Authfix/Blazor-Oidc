﻿const path = require("path");
const webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: [".ts", ".js"]
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader"
            }
        ]
    },
    entry: {
        "authfix.blazor.extensions.oidc": "./src/Initialize.ts"
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].js"
    }
};