const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'development',

    devServer: {
        hot: true,
        host: 'localhost',
        port: 8080,
        inline: true,
        stats: 'minimal',
        historyApiFallback: true,
        allowedHosts: JSON.parse(process.env.ALLOWED_HOSTS || '["localhost"]'),
        headers: { 'Access-Control-Allow-Origin': '*' }
    },

    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerPort: 8081 })
    ]
});
