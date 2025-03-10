const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts", // Main entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "@itsyou/ui",
    libraryTarget: "umd",
    clean: true, // Clean `dist/` before building
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
