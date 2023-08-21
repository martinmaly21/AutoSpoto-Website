const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // Add rule to handle .mov files
    config.module
      .rule('mov')
      .test(/\.mov$/)
      .use('file-loader')
      .loader('file-loader')
      .end();
  }
})
