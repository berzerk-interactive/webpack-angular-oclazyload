var path = require('path'),
    webpack = require("webpack"),
    libPath = path.join(__dirname, 'app'),
    wwwPath = path.join(__dirname, 'build'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
    entry: {
        app: path.join(libPath, 'index.js'),
        vendor: ['angular', 'oclazyload', 'angular-aria', 'angular-animate', 'angular-material']
    },
    output: {
        path: path.join(wwwPath),
        filename: 'bundle.js'
        // filename: 'bundle-[hash:6].js'
    },
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new webpack.DefinePlugin({
          ON_DEMO: process.env.NODE_ENV === 'demo'
        }),
        // HtmlWebpackPlugin: Simplifies creation of HTML files to serve your webpack bundles : https://www.npmjs.com/package/html-webpack-plugin
        new HtmlWebpackPlugin({
            // filename: 'index.html',
            // template: './app/index.html',
            // pkg: pkg,
            template: path.join(libPath, 'index.html'),
            hash: true,
            title: 'title'

        }),
        // OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count. : https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
        new webpack.optimize.OccurenceOrderPlugin(),

        // Deduplication: find duplicate dependencies & prevents duplicate inclusion : https://github.com/webpack/docs/wiki/optimization#deduplication
        new webpack.optimize.DedupePlugin()
    ]
};

module.exports = config;
