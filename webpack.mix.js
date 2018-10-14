const mix = require('laravel-mix');
// eslint-disable-next-line import/no-extraneous-dependencies
const StyleLintPlugin = require('stylelint-webpack-plugin');

if (process.env.NODE_ENV === 'development') {
  // Setup linting
  mix.webpackConfig({
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
      ],
    },
    plugins: [
      new StyleLintPlugin({ context: 'themes/app/src/' }),
    ],
    devtool: 'inline-source-map',
  });
  mix.sourceMaps();
}

// mix.js('themes/app/src/js/app.js', 'themes/app/dist/')
//   .sass('themes/app/src/scss/app.scss', 'themes/app/dist/')
//   .options({ processCssUrls: false });

// mix.js('themes/app/src/app.js', 'themes/app/dist/')
//   .js('themes/app/src/components/**/*.js', 'themes/app/dist/')
//   .sass('themes/app/src/app.scss', 'themes/app/dist/')
//   .sass('themes/app/src/components/**/*.scss', 'themes/app/dist/')
//   .options({ processCssUrls: false });

// Can use mix.js for scss or any file as long as theres a loader for it
// import scss in js file

mix.js('themes/app/src/app.js', 'themes/app/dist/')
  .js('themes/app/src/components/**/*.js', 'themes/app/dist/app.js')
  .options({ processCssUrls: false });

// if (process.env.NODE_ENV === 'production') {
//   mix.minify('themes/app/dist/app.css')
//     .minify('themes/app/dist/app.js');
// }

if (process.env.NODE_ENV === 'production') {
  mix.minify('themes/app/dist/app.js');
}

