const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: './src/index.tsx',

    output: {
        path: __dirname + 'build',
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },

    module: {
        rules: [
            { test: /\.tsx?$/, use: 'awesome-typescript-loader' }
        ]
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },


    plugins: [
        new CheckerPlugin(),

        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),

        new webpack.optimize.ModuleConcatenationPlugin(),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
            // favicon: path.resolve(__dirname, 'public/favicon.ico')
        }),
    ],

    devServer: {
        historyApiFallback: true
    },
}