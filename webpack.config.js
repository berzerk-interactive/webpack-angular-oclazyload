var path = require('path'),
    webpack = require("webpack"),
    libPath = path.join(__dirname, 'app'),
    wwwPath = path.join(__dirname, 'build'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
    entry: {
        app: path.join(libPath, 'index.js'),
        vendor: ['angular', 'oclazyload', 'angular-aria',
          'angular-animate', 'angular-material','angular-ui-router']
    },
    output: {
        path: path.join(wwwPath),
        filename: 'bundle.js'
        // filename: 'bundle-[hash:6].js'
    },
    // for devtools options:
    // eval - Each module is executed with eval and //@ sourceURL.
    // hidden-source-map - Same as source-map, but doesn’t add a reference comment to the bundle.
    // inline-source-map - A SourceMap is added as DataUrl to the JavaScript file.
    // eval-source-map - Each module is executed with eval and a SourceMap is added as DataUrl to the eval.
    // cheap-source-map - A SourceMap without column-mappings. SourceMaps from loaders are not used.
    // cheap-module-source-map - A SourceMap without column-mappings. SourceMaps from loaders are simplified to a single mapping per line.
    devtool: 'eval', //eval is fastest for dev, source-map for delpoys

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
        //custom plugin to build module or not
        new webpack.DefinePlugin({
          ON_DEMO: process.env.NODE_ENV === 'demo'
        }),
        // OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count. : https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
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


    ]
};

module.exports = config;
