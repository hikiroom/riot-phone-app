const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'assets/js/app.js?[hash]'
    },
    module: {
        rules: [
            {
                test: /\.riot$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: '@riotjs/webpack-loader',
                        options: {
                            hot: true
                        }
                    }
                ]
            },
        ]
    },
    devServer: {
        open: true,
        hot: true,
        contentBase: path.resolve(__dirname, 'src'),
        port: 8080,
        watchContentBase: true
    },
    resolve: {
        extensions: ['.js', '.riot']
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapaseWhiteSpace: true,
                removeAttributeQuotes: false
            }
        }),
        new CopyWebPackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }])
    ]
};