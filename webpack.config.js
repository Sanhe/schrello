// eslint-disable-next-line no-undef
module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        // eslint-disable-next-line no-undef
        path: __dirname + "/public",
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "./public",
    },
};
