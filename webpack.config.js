const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "build"),
        filename: "index.bundle.js",
        publicPath: '/',
    },
    mode: "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        open: true,
        port: 3100,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                            compress: {
                                optipng: {
                                    optimizationLevel: 4,
                                },
                                mozjpeg: {
                                    progressive: true,
                                    quality: 40,
                                },
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg(\?.*)?$/,
                use: ['svg-url-loader', 'svg-transform-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};