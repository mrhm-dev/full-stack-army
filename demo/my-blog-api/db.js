const fs = require('fs/promises');
const path = require('path');

class DatabaseConnection {
	constructor(dbURL) {
		this.db = null;
		this.dbURL = dbURL;
	}

	async read() {
		const dbStr = await fs.readFile(this.dbURL, { encoding: 'utf-8' });
		this.db = JSON.parse(dbStr);
	}

	async write() {
		if (this.db) {
			await fs.writeFile(this.dbURL, JSON.stringify(this.db));
		}
	}

	async getDB() {
		if (this.db) {
			return this.db;
		}
		await this.read();
		return this.db;
	}
}

const connection = new DatabaseConnection(path.resolve(process.env.DB_URL));
module.exports = connection;
