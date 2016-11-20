var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var WatchMissingNodeModulesPlugin = require('../scripts/utils/WatchMissingNodeModulesPlugin');
var paths = require('./paths');
var entries = require('./entries');

var webpackConfig = {
  devtool: 'eval',
  entry: {
    devServerClient:  require.resolve('webpack-dev-server/client') + '?/',
    // main: [
    //   require.resolve('webpack/hot/dev-server'),
    //   require.resolve('./polyfills'),
    //   path.join(paths.appSrc, 'entries/index')
    // ],
    // demo: [
    //   require.resolve('webpack/hot/dev-server'),
    //   require.resolve('./polyfills'),
    //   path.join(paths.appSrc, 'entries/demo')
    // ],
  },
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: paths.appSrc,
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot',
        include: paths.appSrc
      },
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel',
        query: require('./babel.dev')
      },
      {
        test: /\.scss$/,
        include: path.join(paths.appSrc, 'styles'),
        loaders: [
          'style',
          'css',
          'postcss',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.scss$/,
        include: paths.appSrc,
        exclude: path.join(paths.appSrc, 'styles'),
        loaders: [
          'style',
          'css',
          'postcss',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.css$/,
        include: [paths.appSrc, paths.appNodeModules],
        loaders: [
          'style',
          'css',
          'postcss'
        ]
      },
      {
        test: /\.json$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|eot|otf|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },
  sassLoader: {
    includePaths: path.join(paths.appSrc, 'styles')
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
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: paths.appHtml,
    //   chunks: ['main'],
    //   favicon: paths.appFavicon,
    // }),
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   filename: 'demo.html',
    //   chunks: ['demo'],
    //   template: paths.appHtml,
    //   favicon: paths.appFavicon,
    // }),
    // Makes the environment available to the JS code
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin(),
    // new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new DashboardPlugin()
  ]
};

entries.forEach(function(file) {

  console.log('forEach-------',filenames)
  var filenames = file.split('.');
  if (filenames[1] === 'js') {
    webpackConfig.entry[filenames[0]] = [
      require.resolve('webpack/hot/dev-server'),
      require.resolve('./polyfills'),
      path.join(paths.appSrc, 'entries/' + filenames[0])
    ]

    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      filename: filenames[0] + '.html',
      chunks: [filenames[0]],
      favicon: paths.appFavicon,
    }))
  }
})

module.exports = webpackConfig;