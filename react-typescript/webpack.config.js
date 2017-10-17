// webpack 打包的入口的文件 一切皆资源 一切皆可打包
// typescript + react
// typescript 优点：强类型 编译阶段就把代码检查了  全部交给webpack  识别.ts .tsx -> loader 来进行解析 处理 原生的.js 文件 
// --dev 就是开发阶段的包  development


// 如何自己的书写

var path = require('path')
var webpack = require('webpack')
var basePath = __dirname  //当前项目的绝对物理路径
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 向外输出
  // koa 上下文环境 src 开发的主目录 webpack打包的主目录  设置打包的主目录context 
  context: path.join(basePath, 'src'),
  // 解决 处理文件
  resolve: {
    // 要解决的文件的后缀
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: {  //入口
    app: './index.tsx',
    // 两个css 作为入口  webpack一切皆可打包 
    // css作为入口的文件之一 独立打包 便于文件的分离
    appStyles: './css/site.css',
    // 公用库单独打包 便于性能优化 
    // 业务会边 vender 不变
    vendor: [
        "react",
        "react-dom",
        "react-router",
        "toastr"
    ],
    vendorStyles: [  //单独打包的依赖文件 有些文件只需要开发的时候使用 上线的时候就用不到
      '../node_modules/bootstrap/dist/css/bootstrap.css',
      '../node_modules/toastr/build/toastr.css'
    ],
  },
  output: {
    // dist 目标输出文件夹 distance
    path: path.join(basePath, 'dist'),
    filename: '[name].js'
  },
  // module和loader的区别
  module: {
    rules: [
      {
        test: /\.tsx?$/,  //？ [0,1]   * [0,n]  +[1, n]
        exclude: /node_modules/,
        // npm 包 loader .ts -> typescript -> .js    .tsconfig.js
        loader: 'awesome-typescript-loader',
        options: {
          userBabel: true
        }
      },
      {
        test: /\.css$/,
        use: [
          // 行内css样式 嵌入js
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }, 
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
          // 小于100kb 自动转base64格式
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  },
  // 调试代码 
  devtool: 'inline-source-map',
  // 调试端口
  devServer: { 
    port: 8080,
    noInfo: true
  },
  plugins: [
    // #app spa 挂载页面  在dist目录下创建一个index.html 以这个为模板
    // html + react root 组件
    new HtmlWebpackPlugin({
      filename: 'index.html', //生成文件的 文件名 
      template: 'index.html',
      hash: true  //生成的.js?123123 进行静态文件的更新  解决浏览器的缓存 
    }),
    // 分离公用块
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor'],
    })
  ]
}
