const path = require('path')

export default {
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
  "alias": {
    "@": path.resolve(__dirname, "./src")
  }
}
