module.exports = {
    entry: {
        App: "./app/assets/scripts/App.js"
    },
    output: {
        path: "./app/temp/scripts",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}