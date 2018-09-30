#!/usr/bin/env node
const request = require('request');
function execute(param){
    if(param == 'connect'){
        request('http://localhost:9221/connect', (error, response, body) => {
            console.log(body);
        });
    } else if(param == 'play'){
        request('http://localhost:9221/play', (error, response, body) => {
            console.log(body);
        });
    } else if(param == 'pause'){
        request('http://localhost:9221/pause', (error, response, body) => {
            console.log(body);
        });
    } else if(param == 'prev'){
        request('http://localhost:9221/prev', (error, response, body) => {
            console.log(body);
        });
    } else if(param == 'next'){
        request('http://localhost:9221/next', (error, response, body) => {
            console.log(body);
        });
    } else if(param == 'fav'){
        request('http://localhost:9221/favorite', (error, response, body) => {
            console.log(body);
        });
    } else if(param == 'unfav'){
        request('http://localhost:9221/unfavorite', (error, response, body) => {
            console.log(body);
        });
    } else if(param == 'stop'){
        request('http://localhost:9221/stop', (error, response, body) => {
            console.log(body);
        });
    } else{
        console.log(param);
    }
}

execute(process.argv[2]);