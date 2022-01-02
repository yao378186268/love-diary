module.exports = {
  runtimeCompiler: true,

  //所有资源使用相对路径

  publicPath: "./",

  //打包后资源存放的目录

  outputDir: "dist",

  //设置所有标签属性有双引号

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "爱情日记";

      args[0].minify = false;

      return args;
    });
  },

  devServer: {
    open: true,
  },

  // 定义全局的scss变量
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["./src/style/variable.scss"],
    },
  },
};
