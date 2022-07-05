const Ticket = require('../models/Ticket');

class MyDB {
	constructor() {
		this.tickets = [];
	}

	/**
	 * Create and save a new ticket
	 * @param {string} username
	 * @param {number} price
	 * @returns {Ticket} return a ticket object
	 */
	create(username, price) {
		const ticket = new Ticket(username, price);
		this.tickets.push(ticket);
		return ticket;
	}

	/**
	 * Create multiple tickets for a single user
	 * @param {string} username
	 * @param {number} price
	 * @param {number} quantity
	 * @returns {Array<Ticket>}
	 */
	bulkCreate(username, price, quantity) {
		const result = [];
		for (let i = 0; i < quantity; i++) {
			const ticket = this.create(username, price);
			result.push(ticket);
		}
		return result;
	}

	/**
	 * returns all available tickets
	 */
	find() {
		return this.tickets;
	}

	/**
	 * find ticket by ticket id
	 * @param {string} ticketId
	 * @returns {Ticket}
	 */
	findById(ticketId) {
		const ticket = this.tickets.find(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => ticket.id === ticketId
		);

		return ticket;
	}

	/**
	 * find all tickets for a given user
	 * @param {string} username
	 * @returns {Array<Ticket>}
	 */
	findByUser(username) {
		const tickets = this.tickets.filter(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => ticket.username === username
		);
		return tickets;
	}

	/**
	 * update ticket by id
	 * @param {string} ticketId
	 * @param {{username: string, price: number}} ticketBody
	 * @returns {Ticket}
	 */
	updateById(ticketId, ticketBody) {
		const ticket = this.findById(ticketId);
		ticket.username = ticketBody.username ?? ticket.username;
		ticket.price = ticketBody.price ?? ticket.price;
		ticket.updatedAt = new Date();
		return ticket;
	}

	/**
	 * delete ticket from db
	 * @param {string} ticketId
	 */
	deleteById(ticketId) {
		const index = this.tickets.findIndex(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => ticket.id === ticketId
		);

		if (index !== -1) {
			this.tickets.splice(index, 1);
			return true;
		} else {
			return false;
		}
	}

	/**
	 * find winners
	 * @param {number} winnerCount
	 * @returns {Array<Ticket>}
	 */
	draw(winnerCount) {
		const winnerIndices = new Array(winnerCount);
		let index = 0;
		while (index < winnerCount) {
			let winnerIndex = Math.floor(Math.random() * this.tickets.length);
			if (!winnerIndices.includes(winnerIndex)) {
				winnerIndices[index++] = winnerIndex;
				continue;
			}
		}

		const winners = winnerIndices.map((index) => this.tickets[index]);
		return winners;
	}
}

const myDB = new MyDB();
module.exports = myDB;
