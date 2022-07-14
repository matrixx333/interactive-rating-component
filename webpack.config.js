const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app.ts',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    devServer: {
        open: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: './images/favicon-32x32.png'
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // handling images
            {
                test: /\.(png|jpg)$/,
                type: 'asset'
            },
            // handling css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};