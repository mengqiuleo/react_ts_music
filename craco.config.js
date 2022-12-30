/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 02:22:19
 * @LastEditTime: 2022-12-26 03:29:15
 */
const CracoLessPlugin = require('craco-less')
const path = require('path')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // less配置
  plugins: [{
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
  }],
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    }
  }
}
