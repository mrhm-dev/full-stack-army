# Lecture 17 - [Backend 4] Raffle Draw Project

We will make a lottery app in this class. The details are given below:

## Lottery API

- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all tickets
- get ticket by id
- bulk buy (user can buy multiple tickets at a time)
- raffle draw

### Ticket

- number (unique)
- username
- price
- timestamp

#### Routes

- /tickets/t/:ticketId GET - find single ticket
- /tickets/t/:ticketId PATCH - update ticket by id
- /tickets/t/:ticketId DELETE - delete ticket by id
- /tickets/u/:username GET - find tickets for a given user
- /tickets/u/:username PATCH - update tickets for a given user
- /tickets/u/:username DELETE - delete all tickets for a given user
- /tickets/sell - create tickets
- /tickets/bulk - bulk sell ticket
- /tickets/draw
- /tickets/ - find all tickets

#### References

- [Source Code](../../projects/raffle-draw/)
- [Class Overview](../../Class%20Overview/Lecture-17/README.md)

#### Tasks

- Make this app on your own way
- Go to this [link](https://www.mongodb.com/docs/manual/crud/) and study Insert documents, Query documents, Update documents and Delete documents
