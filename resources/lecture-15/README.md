# Lecture 15 - [Backend 2] Introduction to Backend Development

#### Topics to learn

**Must Needed**

- API Design
  - REST API
  - GraphQL
  - gRPC
  - <p style='color: gray;'>SOAP (less than 1%)</p>
  - <p style='color: gray;'>Web Socket (really tough to scale)</p>
  - <p style='color: gray;'> Message Broker (Not beginner friendly concept)</p>
- API Security
  - JWT Token
  - Refresh Token
  - <p style='color: gray;'>OAuth2</p>
  - <p style='color: gray;'>SAML</p>
  - <p style='color: gray;'>Identity Providers (Cognito, Auth0, Firebase, Okta)</p>
  - Role Based Authorization
- API Testing
  - Unit Testing
  - Acceptance Testing
  - Load Testing
- API Documentation
  - Swagger
  - Postman

To learn above 4 topics we need to learn some another topics:

- Database
  - NoSQL
    - MongoDB
    - AWS DynamoDB
  - SQL
    - PostgreSQL
    - MySQL
    - MSSQL / Oracle
  - In Memory\*
    - Redis\*
    - Mem Cached
  - Graph Database
    - Neo4j
- Linux Server
- Cloud Computing
- DevOps

#### Server Application Responsibilities

- Listen Request
  - Always Same
- Process
  - Algorithm
  - Data Structure
  - Database
  - Problem Solving
  - CRUD
- Response
  - Always Same

#### HTTP (Hypertext Transfer Protocol):

- GET - want to read data from server
- POST - create new data
- PUT/PATCH - update existing content
- DELETE - delete data from database

#### Routing Pattern

- GET Everything - /books
- Get one book - /books/bookId
- POST new book - /books
- Update Book - /books/bookId
- Delete Book - /book/booksId

#### Pipeline:

REQUEST -> MIDDLEWARE[logger, body parser, file parser, user ip, block ip, authentication, authorization, validation] -> CONTROLLER (Business Logic) -> MIDDLEWARE[error handler] -> RESPONSE

#### References:

- [ExpressJS API References](https://expressjs.com/en/4x/api.html)
- [Source Code](../../src/lecture-15/)

#### Tasks:

Complete the playlist [Express Js Crash Course In Bangla](https://youtube.com/playlist?list=PL_XxuZqN0xVDm9HkiP4h_76qNBZix6XME)

#### Next week planning

- We will create our first working REST API.
