#!/usr/bin/env node

const request = require('request');

request('http://localhost:9221/next', (error, response, body) => {
    console.log(body);
});