module.exports = {
    plugins: [
        require('autoprefixer'),
        require("postcss-import"),
        require("tailwindcss"),
        require("postcss-preset-env")({stage: 1}),
        require("cssnano"),
        require("tailwindcss"),
        require('postcss-advanced-variables')
    ],
  };