const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], //order is important - execution starts from the end
            },
            {
                test: /\.(gif|png|svg|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|otf|woff|woff2|eot)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],    
}