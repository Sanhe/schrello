// eslint-disable-next-line no-undef
module.exports = {
    entry: "./src/index.js",
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
