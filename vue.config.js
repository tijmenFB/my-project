const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    runtimeCompiler: true,
    transpileDependencies: [
        'vuetify'
    ],
    pages: {
        index: {
            entry: 'src/main.js'
        }
    }
}
