const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
            // favicon: path.resolve(__dirname, 'public/favicon.ico')
        }),
    ]
}