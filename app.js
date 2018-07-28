const puppeteer = require('puppeteer');
const VIEWPORT = { width: 1920, height: 1080 };
const express = require('express')
const request = require('request');
const app = express()
var saavnPage;

app.get('/play', (req, res) => {
	(async () => {
		await saavnPage.evaluate(() => {
		    const element = document.querySelector('#play.controls');
		    console.log(element);
		    element.click(); 
		    return true;
		});
		res.status(200).send('Ok');
	})();
})

app.get('/pause', (req, res) => {
	(async () => {
		await saavnPage.evaluate(() => {
		    const element = document.querySelector('#pause.controls');
		    console.log(element);
		    element.click(); 
		    return true;
		});
		res.status(200).send('Ok');
	})();
})

app.get('/prev', (req, res) => {
	(async () => {
		await saavnPage.evaluate(() => {
		    const element = document.querySelector('#rew.controls');
		    console.log(element);
		    element.click(); 
		    return true;
		});
		res.status(200).send('Ok');
	})();
})

app.get('/next', (req, res) => {
	(async () => {
		await saavnPage.evaluate(() => {
		    const element = document.querySelector('#fwd.controls');
		    console.log(element);
		    element.click(); 
		    return true;
		});
		res.status(200).send('Ok');
	})();
})

app.get('/stop', (req, res) => {
	saavnPage.close();
	res.status(200).send('Ok');
	process.exit(1);
})

app.get('/start', (req, res) => {
	request('http://localhost:9222/json/version', (error, response, body) => {
		body = JSON.parse(body);
		(async () => {
			const browser = await puppeteer.connect({browserWSEndpoint: body.webSocketDebuggerUrl, 
				ignoreHTTPSErrors: true});
			var pages = await browser.pages();
			pages = pages.filter(page => page.url().indexOf('saavn') >=0);
			if (pages.length > 0) {
				saavnPage = pages[0];
				res.status(200).send('Ok');
			} else {
				res.status(404).send('Not Found');
			}
		})();
	});
})

app.listen(9221, () => console.log('Example app listening on port 9221!'))
