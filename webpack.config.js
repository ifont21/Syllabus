module.exports = {
  entry: "./app/app.js",
  output:{
    filename: "./app/bundle.js"
  },
  module:{
   preLoaders:[
   {
      test: /\.jsx?$/,
      exclude:/node_modules/,
      loader: "jshint-loader"
   }
   ],
    loaders: [
    {
      test: /\.js$/,
      exclude:/node_modules/,
      loader: "babel-loader"
    }
   ]
  },
  resolve:{
    extensions: ['','.js']
  }
}
