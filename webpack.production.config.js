var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    entry: {
        app: './app/index.js',
        vendor: ['angular', 'oclazyload', 'angular-aria', 'angular-animate', 'angular-material', 'angular-ui-router']
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        // new ngAnnotatePlugin({
        //    add: true
        // }),
        new webpack.DefinePlugin({
          ON_DEMO: process.env.NODE_ENV === 'demo'
        }),
        // Deduplication: find duplicate dependencies & prevents duplicate inclusion : https://github.com/webpack/docs/wiki/optimization#deduplication
        new webpack.optimize.DedupePlugin(),
        // OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count. : https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle:  false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './app/index.html'
        })
    ]
};

module.exports = config;
