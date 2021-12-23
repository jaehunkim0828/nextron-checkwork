const path = require('path');
module.exports = {
  mode: "production",
    entry: "./src/index.js",
    output:{
        filename: 'app.js',
        path: path.resolve(__dirname, 'DIST')
    },
 module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "scss-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
