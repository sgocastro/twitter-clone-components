const path = require("path")
const HtmlWebPackplugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    mode: "development",
    resolve: {
        extensions:[".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader : "html-loader"}
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader'
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackplugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        compress: true,
        port: 9000
    }

}