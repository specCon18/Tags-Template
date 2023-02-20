module.exports = {
    plugins: [
        require('autoprefixer'),
        require("postcss-import"),
        require("tailwindcss"),
        require("postcss-preset-env")({stage: 1}),
        require("cssnano"),
        require("tailwindcss"),
        require("postcss-ts-classnames")({
            dest: "src/types/classnames.d.ts",
            // Set isModule if you want to import ClassNames from another file
            isModule: true,
            exportAsDefault: true, // to use in combination with isModule
        }),
        require('postcss-advanced-variables')
    ],
  };