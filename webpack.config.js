const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        page: './src/scripts/apps/page.js',
        page2: './src/scripts/apps/page2.js'
    },
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'scripts/[name].js'
    },
    module:
    {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract('css-loader')
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new ExtractTextPlugin('css/[name].css')
    ]
}