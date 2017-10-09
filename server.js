const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//Send all other requests to the Angular app
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

require('./server/router')(app);

//set port
const port = process.env.PORT || '4000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));