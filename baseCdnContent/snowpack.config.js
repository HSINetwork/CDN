// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: ".",
  mount: {
    /* ... */
  },
  plugins: [
    [
		["@snowpack/plugin-webpack"],
		["@snowpack/plugin-sass"],
		["@snowpack/plugin-postcss"],
		["@snowpack/plugin-typescript"]
	]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    "out": "./../cdnContent/"
  },
};
