// const path = require('path');
// const {override, addLessLoader} = require('customize-cra');

// const overrideProcessEnv = value => config => {
//   config.resolve.modules = [
//     path.join(__dirname, 'src')
//   ].concat(config.resolve.modules);
//   return config;
// };

// module.exports = override(
//   addLessLoader({
//     javascriptEnabled: true,
//     // modifyVars: {
//     //   '@primary-color': '#038fde',
//     // }
//   }),
//   overrideProcessEnv({
//     VERSION: JSON.stringify(require('./package.json').version),
//   })
// );

const path = require("path");
const {
  override,
  addLessLoader,
  adjustStyleLoaders,
} = require("customize-cra");

const overrideProcessEnv = (value) => (config) => {
  config.resolve.modules = [path.join(__dirname, "src")].concat(
    config.resolve.modules
  );
  return config;
};

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      // modifyVars: {
      //   '@primary-color': '#038fde',
      // }
    },
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),
  overrideProcessEnv({
    VERSION: JSON.stringify(require("./package.json").version),
  })
);
