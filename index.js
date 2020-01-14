"use strict";
const express = require('express')
const path = require('path')
const morgan = require('morgan')
// const helmet = require('helmet')

const app = express()

// app.use(helmet())

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'dist/walletscan')));

// app.use(express.static(__dirname, { dotfiles: 'allow' } ));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/walletscan', 'index.html'));
})

var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log('App is runing on port:' + port);
});