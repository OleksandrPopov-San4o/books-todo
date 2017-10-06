const webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    path = require('path'),
    env = process.env.WEBPACK_ENV || 'dev';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

let config = {
    entry: {
        'app': './src/index.js'
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/build',
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                //query: {
                //    presets: ['react','env']
                //},
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]

};

module.exports = config;