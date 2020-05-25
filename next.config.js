// const withMDX = require("@next/mdx")({
//   extension: /\.md?$/,
// });
// const withPlugins = require("next-compose-plugins");

// const nextConfig = {
//   webpack(config) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         issuer: {
//           test: /\.(js|ts)x?$/,
//         },
//         use: ["@svgr/webpack"],
//       });

//       return config;
//     },
// };

// module.exports = withPlugins([withMDX], nextConfig);


// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
// });
// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "md", "mdx"],
// });

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};