const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "bundler.[name].js",
        path: path.resolve(__dirname,"./dist")
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.less$/,
                exclude: /node_modules/,
                use: ["style-loader",{
                    loader: "css-loader",
                    options: {
                        importLoaders: 1
                    }
                },"less-loader"]
            },
            {
                test: /.css$/,
                exclude: /node_modules/,
                use:["style-loader","css-loader"]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"index.html")
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname,"./public"),
        port: 3006,
        hot: true,
        // host: "192.168.131.87",
        proxy: {
            "api": {
                target: "http://192.168.131.87:3009",
                pathRewrite: {"^/api": ""}
            }
        }
    }
};
