var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../build/webpack.dev.config');

var app = new express();
var compiler = webpack(config);

var webpackDevOptions = {
    noInfo: true,
    historyApiFallback: true,
    publicPath: config.output.publicPath,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
};

app.use(require('webpack-dev-middleware')(compiler, webpackDevOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/dev/index.html'));
});


app.listen(3001, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3001');
});

