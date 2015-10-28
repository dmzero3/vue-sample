'use strict';

var path = {
  src: './src',
  dist: './app'
}

module.exports = {
  src: path.src,
  dist: path.dist,

  // webpack
  webpack: {
    entry: path.src + '/js/entry.js',
    output: {
      filename: 'js/app.js'
    }
  }
};
