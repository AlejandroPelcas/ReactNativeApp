console.log(process.platform); // returns windows32 for me
const { readFile, readFileSync } = require('fs'); // import file system module
const txt = readFileSync('hello.txt', 'utf8');
console.log(txt);
const express = require('express'); // import express (like Flask!)

const app = express();

app.get('/', (request, response) => {
    readFile('index.html', 'utf8', (err,html) => {
        if (err) {
            response.status(500).send('sorry, out of order');
        }

        response.send(html)
    })
})

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));
