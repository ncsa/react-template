const Webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'production',

    devtool: 'source-map',

    optimization: {
        minimize: true
    },

    plugins: [
        new Webpack.DefinePlugin({
            'ENV': JSON.stringify('production')
        })
    ]
});
