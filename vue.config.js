const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  runtimeCompiler: true,

  // 删除打包后的js文件夹中的.map文件
  productionSourceMap: false,

  // 按需引入element-plus组件
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },

  //所有资源使用相对路径

  publicPath: './',

  //打包后资源存放的目录

  outputDir: 'dist',

  //设置所有标签属性有双引号

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '爱情日记';

      args[0].minify = false;

      return args;
    });
  },

  devServer: {
    open: true,

    proxy: {
      '/lovediary': {
        target: 'http://121.5.130.175:9999',
        changeOrigin: true,
        pathRewrite: {
          '^/lovediary': ''
        }
      }
    }
  },

  // 定义全局的scss变量
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: ['./src/style/variable.scss']
    }
  }
};
