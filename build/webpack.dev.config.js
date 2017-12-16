const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',
    context: path.resolve(__dirname, '..'),
    entry: {
        bundle: [
            './client',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'superagent'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: '[name].js',
        chunkFilename: 'chunk.[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
                plugins: ['transform-runtime', 'add-module-exports'],
                cacheDirectory: true
            }
        }, {
            test: /\.scss$/,
            loaders: [
                'style',
                'css?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]',
                'sass'
            ]
        }, {
          test: /\.less$/,
          loader: 'style!css!less'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: 'url?limit=8000'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'html?minimize=false'
        },
        { test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot$/,  loader: "file-loader" },
        { test: /\.svg$/,  loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    resolve: {extensions: ['', '.js', '.json', '.scss', '.css']},
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            filename: '[name].js'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
        new HtmlWebpackPlugin({
            filename: '../views/dev/index.html',
            template: './views/tpl/index.tpl.html'
        }),
        new ProgressBarPlugin({summary: false})
    ]
}