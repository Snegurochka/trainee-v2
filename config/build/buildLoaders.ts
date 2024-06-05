import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|svg|jpg|gif)$/,
    use: ["file-loader"],
  };

  const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  };

  const babelLoader = {
    test: /\.js?$/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [["@babel/preset-env", { targets: "defaults" }]],
      },
    },
    exclude: /node_modules/,
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [babelLoader, typescriptLoader, fileLoader, cssLoader];
}
