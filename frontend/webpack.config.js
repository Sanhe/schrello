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
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".css", ".scss", ".js", ".jsx"],
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
