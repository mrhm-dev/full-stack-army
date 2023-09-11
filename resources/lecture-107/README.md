# Lecture 107 - API Project Entity Relationship Diagram

### Outline

1. [<b>Entities / Schema / Model</b>](#1)
2. [<b>ER Diagram</b>](#2)

<a id="1"></a>

### Entities / Schema / Model

What we need to store?

- User

  - id - int
  - name - string
  - email - string
  - password - string (hashed)
  - role - enum [user, admin] default user
  - status - enum [pending, approved, block, decline]
  - timestamp

<br>

- Article

  - id - int
  - title - string
  - body - text
  - cover - string
  - status - enum [draft, published] default draft
  - authorId - relation with user
  - timestamp

<br>

- Comment

  - id - int
  - body - text
  - authorId - relation with user
  - articleId - relation with article
  - status - enum [public, private]
  - timestamp

<br>

<a id="2"></a>

### ER Diagram

How to store data?

![ER Diagram](../lecture-107/ER%20Diagram.png)
