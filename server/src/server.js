import http from 'http';

import { app } from './app.js';
import { mongoConnect } from './db/mongo.js';

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function start() {
	try {
		await mongoConnect();

		server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
	} catch (e) {
		console.log(e);
	}
}

start();
