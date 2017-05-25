module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            { 
                test: /lib\/babylon.js/, 
                use: [
                    {
                        loader: "expose-loader",
                        query: "BABYLON"
                    }
                ]
            }
        ]
    }
}