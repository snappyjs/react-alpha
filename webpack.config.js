'use strict';
/*eslint-env node */

const webpack = require('webpack');
const path = require('path');

// ----------------------------
// Plugins
// ----------------------------
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// -------------------------------
// Paths
// -------------------------------
const APP_DIR = path.join(__dirname, 'client');
const PUBLIC_DIR = path.join(__dirname, 'public');
const COMPONENTS_DIR = path.join(APP_DIR, 'components');
const FEATURES_DIR = path.join(APP_DIR, 'features');
const VIEWS_DIR = path.join(APP_DIR, 'views');
const STYLES_DIR = path.join(APP_DIR, 'styles');

// ----------------------------
// Utilities
// ----------------------------
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const { ifProduction, ifDevelopment } = getIfUtils(process.env.NODE_ENV);

module.exports = {
    // -------------------------
    // Wepback Mode
    // -------------------------
    mode: ifProduction('production', 'development'),
    cache: ifDevelopment(),
    devtool: ifProduction('source-map', 'eval'),

    // --------------------------
    // Entry Points
    // --------------------------
    entry: {
        bundle: ['babel-polyfill', path.join(APP_DIR, 'app.js')],
    },

    // --------------------------
    // Outputs
    // --------------------------
    output: {
        path: PUBLIC_DIR,
        filename: '[name].js',
        publicPath: '/'
    },

    // --------------------------
    // Module
    // --------------------------
    module: {
        rules: removeEmpty([
            // Babel for transpiling all JS.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            ifProduction({
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader?modules=true&localIdentName=[name]_[local]', 'resolve-url-loader', 'sass-loader?sourceMap=true']
            }),

            // We won't extract the scss in development (for hot loading)
            ifDevelopment({
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?modules=true&localIdentName=[name]_[local]!resolve-url-loader!sass-loader?sourceMap=true'
            }),

            // Loading of files that is imported
            {
                test: /\.(png|svg|jpg|gif|jpeg|woff|woff2|eot|ttf)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    name: ifProduction('[hash].[ext]', '[name].[ext]'),
                    limit: 1000
                }
            }
        ])
    },

    // --------------------------
    // Resolve
    // --------------------------
    resolve: {
        alias: {
            components: COMPONENTS_DIR,
            features: FEATURES_DIR,
            views: VIEWS_DIR,
            styles: STYLES_DIR
        }
    },

    // --------------------------
    // Optimization
    // --------------------------
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    // ---------------------------
    // Plugins
    // ---------------------------
    plugins: removeEmpty([
        // HotLoader only for development
        ifDevelopment(new webpack.HotModuleReplacementPlugin()),

        // Extract the css to a seperate file in production
        ifProduction(
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ),

        // Analyzes the size of the bundle in production
        ifProduction(new BundleAnalyzerPlugin()),

        ifProduction(
            new CompressionPlugin({
                test: /\.js$/,
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                threshold: 0,
                minRatio: 0.95
            })
        ),

        // Global Parameters (no need to import React everywhere)
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            PropTypes: 'prop-types'
        }),

        // Automatically generate the html-file
        new HtmlWebpackPlugin({
            inject: false,
            template: HtmlWebpackTemplate,
            appMountId: 'app',
            mobile: true,
            title: 'React-Alpha -> React Starter kit ready for production'
        })
    ]),

    // -------------------------
    // Development Server
    // -------------------------
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
        contentBase: PUBLIC_DIR,
        port: 3000
    }
};
