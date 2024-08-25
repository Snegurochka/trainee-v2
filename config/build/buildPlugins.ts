import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import { BuildOptions } from "./buildWebpackTypes";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new Dotenv({
      path: "./.env.local",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales },
      ],
    }),
  ];
}
