const path = require('path')

module.exports = {
  outputDir: 'public',
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify',
  ],

  css: {
    loaderOptions: {
      sass: {
      },
    },
  },
}
