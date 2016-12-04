var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            { 
              test: /\.css$/, 
              loader: "style-loader!css-loader" 
            },
            { 
              test: /\.(jpg|png)$/, 
              loader: "url-loader" 
            },
            { 
              test: /\.(jpg|png)$/, 
              loader: "file-loader" 
            },
            { 
              test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
              loader: 'url-loader?limit=100000' 
            },
            {
              test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
              loader: 'file-loader',
            },
            { 
              test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, 
              loader: 'imports-loader?jQuery=jquery' 
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js',
        publicpath:'/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
