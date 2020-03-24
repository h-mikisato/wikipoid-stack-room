const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = [{
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
               plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['./node_modules']
              },
              // Prefer Dart Sass
              implementation: require('sass'),
            }
          },
        ]
      },
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
}];

// Local Variables:
// js-indent-level:2
// End:
