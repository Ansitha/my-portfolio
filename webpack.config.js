const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // ✅ changed from 'dist' to 'build'
        filename: 'bundle.js',
        clean: true, // ✅ optional: cleans old files before each build
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules\/(?!(@mui|@emotion|react-spring)\/).*/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // your HTML template
        }),
    ],

    devServer: {
        static: path.resolve(__dirname, 'build'), // ✅ serve from 'build'
        port: 3000,
        open: true,
        historyApiFallback: true, // ✅ support React Router SPA routing
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
