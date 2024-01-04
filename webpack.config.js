const path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.js'],
        alias: {
            'global': path.resolve(__dirname, './src/js/global.js') 
        }
    },
    entry: {
        index: './src/js/index.js',
        index2: './src/js/index2.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};