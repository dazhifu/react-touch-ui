var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var url = require('url');
var paths = require('./paths');
var entries = require('./entries');

var homepagePath = require(paths.appPackageJson).homepage;
var publicPath = homepagePath ? url.parse(homepagePath).pathname : '/';
if (!publicPath.endsWith('/')) {
  publicPath += '/';
}

var webpackConfig = {
  bail: true,
  devtool: 'source-map',
  entry: {},
  /*entry: [
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index')
  ],*/
  output: {
    path: paths.appBuild,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    publicPath: '.'+publicPath
  },
  resolve: {
    extensions: ['.js', '.json', ''],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: paths.appSrc
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel',
        query: require('./babel.prod')
      },

      {
        test: /\.scss$/,
        include: paths.appSrc,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass?sourceMap'
        ]
      },

      {
        test: /\.css$/,
        include: paths.appSrc,
        loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss')
      },
      {
        test: /\.json$/,
        include: paths.appSrc,
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|eot|otf|svg|ttf|woff|woff2)(\?.*)?$/,
        include: paths.appSrc,
        loader: 'file',
        query: {
          name: 'static/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        include: paths.appSrc,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
    ];
  },
  sassLoader: {
    includePaths: path.join(paths.appSrc, 'styles')
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: paths.appHtml,
    //   favicon: paths.appFavicon,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeRedundantAttributes: true,
    //     useShortDoctype: true,
    //     removeEmptyAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     keepClosingSlash: true,
    //     minifyJS: true,
    //     minifyCSS: true,
    //     minifyURLs: true
    //   }
    // }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('[name].[contenthash:8].css')
  ]
};

entries.forEach(function(file) {
  var filenames = file.split('.');


  if (filenames[1] === 'js') {
    webpackConfig.entry[filenames[0]] = [
      require.resolve('./polyfills'),
      path.join(paths.appSrc, 'entries/' + filenames[0])
    ]
      webpackConfig.plugins.push(new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      filename:   filenames[0] + '.html',
      chunks:  + filenames[0],
      favicon: paths.appFavicon,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }))
  }
})

module.exports = webpackConfig;