module.exports = {
/*  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  }*/

/*  entry: ['./main1', './main2'],
  output: {
    filename: 'bundle.js'
  }*/

  entry: {
        page1: "./main2",
        page2: ["./main1", "./main2"]
    },
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js",
        path: __dirname+'/dist',
        publicPath: '/static/'
    }
};