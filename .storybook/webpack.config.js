const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          babelrc: true,
          extends: path.join(__dirname, ".babelrc")
        }
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
