module.exports = {
  runtimeCompiler: true,

  //所有资源使用相对路径

  publicPath: "./",

  //打包后资源存放的目录

  outputDir: "dist",

  //设置所有标签属性有双引号

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "张文婷与姚成成的爱情故事"

      args[0].minify = false

      return args
    })
  },

  devServer: {
    open: true,
  },
}
