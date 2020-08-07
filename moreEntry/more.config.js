const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { glob } = require("glob");

const sourceMap = () => {
  let entry = {},
    htmlPlugins = [];
  let ob = glob.sync(path.join(__dirname, "./src/*/index.js"));
  ob.map(item => {
    const match = item.match(/src\/(.*)\/index\.js$/);
    const pathName = match && match[1];
    entry[pathName] = item;
    htmlPlugins.push(new htmlWebpackPlugin({
      template: path.join(__dirname, `./src/${pathName}/index.html`),
      filename: `${pathName}/${pathName}.html`,
      chunks: [pathName]
    }))
  })

  return {
    entry,
    htmlPlugins
  }
}

// sourceMap()
const { entry, htmlPlugins } = sourceMap();
module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "./mpa"),
    filename: "[name]-[chunkhash:6].js",
  },
  mode: "development",
  plugins: [...htmlPlugins],
};
