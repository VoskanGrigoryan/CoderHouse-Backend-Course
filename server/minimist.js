'use strict';

// const args = require('minimist')(process.argv.slice(2));
// import args from 'minimist';
// console.log(args(process.argv.slice(2)))

import minimist from 'minimist'

let args = minimist(process.argv.slice(2), {
    alias: {
        h: 'help',
        v: 'version'
    }
})

console.log('args', args)