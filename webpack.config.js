const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
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
            template: './public/index.html', // 👈 This is where your HTML template is defined
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000, // Change to a free port like 3000 or 5173
        open: true,
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
