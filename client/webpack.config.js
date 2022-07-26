const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
	return {
		mode: "development",
		// Entry point for files
		entry: {
			main: "./src/js/index.js",
			install: "./src/js/install.js",
		},
		// Output for our bundles
		output: {
			filename: "[name].bundle.js",
			path: path.resolve(__dirname, "dist"),
		},
		plugins: [
			// Webpack plugin that generates our html file and injects our bundles.
			new HtmlWebpackPlugin({
				template: "./index.html",
				title: "Mood",
			}),

			// Injects our custom service worker
			new InjectManifest({
				swSrc: "./src-sw.js",
				swDest: "src-sw.js",
			}),

			// Creates a manifest.json file.
			new WebpackPwaManifest({
				fingerprints: false,
				inject: true,
				name: "Mood",
				short_name: "Mood",
				description: "Daily and weekly tracker for positive mental health",
				background_color: "#225ca3",
				theme_color: "#225ca3",
				start_url: "/",
				publicPath: "/",
			}),
		],

		module: {
			// CSS loaders
			rules: [
				{
					test: /\.css$/i,
					use: ["style-loader", "css-loader"],
				},
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					// We use babel-loader in order to use ES6.
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
							plugins: ["@babel/plugin-proposal-object-rest-spread", "@babel/transform-runtime"],
						},
					},
				},
			],
		},
	};
};
