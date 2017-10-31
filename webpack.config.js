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
        'app': './src/index.jsx'
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/build',
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }, { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            }, { 
                test: /\.(png|jpg|jpeg)$/, 
                loader: 'url-loader?name=build/images/[name].[ext]'}

        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {    
        inline: true,    
        historyApiFallback: true,
    }
};

module.exports = config;