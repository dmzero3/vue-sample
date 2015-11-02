'use strict';

var webpack = require('webpack');
var path = require('path');
var current = process.cwd();

var dir = {
  src: './src',
  dist: './app'
}

module.exports = {
  src: dir.src,
  dist: dir.dist,

  // webpack
  webpack: {
    entry: dir.src + '/js/entry.js',
    output: {
      filename: 'js/app.js'
    },
    resolve: {
      // 拡張子を省略することができる
      // jsはデフォルトではいっている
      extenstions: ['', '.js', '.json', '.html'],
      // requireで読み込むときのrootを指定
      // 配列で複数の指定が可能
      root: [path.join(current, '/src/bower_components')],

      modulesDirectories: ['bower_components', 'node_modules'],
      // ファイル単体でaliasを貼る
      // bowerで取得したライブラリでmainが設定されてないときなとに使用する
      alias: {

      },
    },
    plugins: [
      // bowerのモジュールを読み込めるようにする
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
      ),
      // 指定のモジュールを予めグローバル変数としておく
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ],
    devtool: '#source-map'
  }
};
