const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  mode: 'development', // or 'production'
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'socket.io-client': require.resolve('socket.io-client')
    },
    fallback: {
        buffer: require.resolve("buffer/"),
        crypto: require.resolve("crypto-browserify"),
        util: require.resolve("util/"),
        timers: require.resolve("timers-browserify"),
        stream: require.resolve("stream-browserify"),
        assert: require.resolve("assert/"),
        process: require.resolve("process/browser"),
        path: require.resolve("path-browserify"),
        querystring: false,
        net: false, // If you are targeting browsers, disable unsupported modules.
        async_hooks: false, // Async hooks are not supported in browsers.
        url: false,
        http: false,
        zlib: false,
        stream: false,
        fs: false,
        vm: false ,
    },
  },  
};
