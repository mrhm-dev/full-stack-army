# Lecture 100 - Develop Backend Application | REST API Checklist

## Main Components of Backend Application

- Handle HTTP Requests (Mostly done by a framework)
    - Client → HTTP → Server
- Handle Routing (Mostly done by a framework)
- Handle Security (Mostly done by the framework and language)
- Write Business Logic (Done by the programming language)
- Access Operating System (Done by the programming language)
- Access The Database (Done by DB Engine or ORM)
- Access Third Party Services (Synchronous - HTTP, Asynchronous - Message Queue)

## API Development Checklist

🔥Mean *Most Important*

- [ ]  🔥Scaffold A Project
- [ ]  🔥Create A Route
- [ ]  🔥Create A Controller For This Route
    - [ ]  Extract Data From Request Object
    - [ ]  Validate and Sanitize Incoming Data
    - [ ]  Permission and Authorization
    - [ ]  Write Business Logic Separately
        - [ ]  🔥Main Business Logic
        - [ ]  Database Connection (Persist / Fetch Data)
        - [ ]  Utilities
    - [ ]  🔥Handle Possible Errors
    - [ ]  Synchronous / Asynchronous Communication With Third Party Services
    - [ ]  🔥Send A Response
- [ ]  Create and Connect Necessary Middleware (Global/ Local)
