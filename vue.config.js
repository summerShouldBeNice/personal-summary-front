const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false,
  // 设置端口
  devServer: {
    port: 9999
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 全局通用less
        path.resolve(__dirname, "./src/theme/common.less")
      ]
    }
  }
})
