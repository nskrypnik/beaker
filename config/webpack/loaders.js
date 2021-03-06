/**
 * @author Adam Meadows [@job13er](https://github.com/job13er)
 * @copyright 2015 Cyan, Inc. All rights reserved.
 */

'use strict';

var es6Loader;

if (process.env.JASMINE) {
    es6Loader = 'babel?plugins[]=rewire&plugins[]=object-assign';
} else {
    es6Loader = 'babel?plugins=object-assign';
}

module.exports = [
    {
        test: /\.css$/,
        loader: 'style!css!postcss',
    }, {
        test: /\.less$/,
        loader: 'style!css!postcss!less',
    }, {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
    }, {
        test: /\.sass$/,
        loader: 'style!css!postcss!sass?indentedSyntax',
    }, {
        test: /\.jade$/,
        loader: 'jade',
    }, {
        test: /\.6\.js$/,
        loader: es6Loader,
    }, {
        test: /\.json$/,
        loader: 'json',
    }, {
        test: /\.(yaml|yml)$/,
        loader: 'json!yaml',
    }, {
        test: /\.(svg|woff|woff2|eot|dtd|png|gif|jpg|jpeg|ttf)(\?.*)?$/,
        loader: 'file',
    },
];
