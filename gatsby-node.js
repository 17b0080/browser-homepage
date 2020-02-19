// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
const StylelintPlugin = require('stylelint-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions },{ cssLoaderOptions = {}, postCssPlugins, ...postcssOptions }) => {
  actions.setWebpackConfig({
    plugins: [new StylelintPlugin({
      fix: true,
      files: `**/*.css`
    })]
  })
};