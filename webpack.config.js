const path = require('path');
var webpack = require('webpack');
// 在 “/src/index.template.html” 实现自动引入
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        publicPath:'/', // 必须加publicPath
        chunkFilename: "static/js/[name].chunk.js",
        filename: 'app/[name]_[hash:8].js',
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.

    // 配置如下参数内容，需要在index.html手动引入react和react-dom，在webpack忽略打包
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),  // 热更新插件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.template.html'),
            inject: true
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        host: 'localhost',
        port: 3000,
        inline: true,//实时刷新
        hot: true,//Enable webpack's Hot Module Replacement feature
        compress: true,//Enable gzip compression for everything served
        overlay: true, //Shows a full-screen overlay in the browser
        stats: "errors-only",//To show only errors in your bundle
        open: true, //When open is enabled, the dev server will open the browser.
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {"^/api": ""}
            }
        }//重定向
    }
};
