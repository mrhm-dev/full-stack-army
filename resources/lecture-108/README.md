# Lecture 108 - API Endpoints and Introduction to Swagger

### Outline

1. [<b>API Endpoints</b>](#1)

<a id="1"></a>

### API Endpoints

##### Namespaces

- Public - Anyone with API access
- Admin / Private - Internal use only (restricted, different CORS policy)

<br>

###### <strong><i>We will follow no namespace at this moment</i></strong>

- <b>Article</b>

  <details>
  <summary>Get all articles</summary>

  Method: GET<br>
  Access: Public<br>
  Path: <code>/articles?query=params</code><br>
  Query:

  - page (default 1) - current page number
  - limit (default 10) - the number of objects should be returned
  - sortType (default desc) - the type of sort, it could be either asc or desc
  - sortBy (default updatedAt) - the property that will used to sort. It could be either updatedAt or title.
  - search - the search term to filter articles based on the titles.

  <br>

  Response:

  - 200
    - article data
      - id
      - title
      - cover
      - author
        - id
        - name
      - timestamp
    - pagination
      - page
      - limit
      - nextPage
      - prevPage
      - totalPage
      - totalArticle
    - links
      - self
      - nextPage
      - prevPage
      - comments
      - author
  - 400
    - message
  - 500

    - message
    </details>

    <details>
    <summary>Create a new article</summary>

    Method: POST<br>
    Access: Private<br>
    Path:<code>/articles</code><br>
    Request Body:

    - article data
      - title
      - body
      - cover (optional)
      - status (default draft)

    <br>

    Response:

    - 201

      - message
      - article
      - links
        - self
        - comments
        - author

    - 400

      - message
      - data (Array of error messages)

        - field
        - message

    - 401
      - message

    </details>

    <details>
    <summary>Get a single article</summary>

    Method: GET<br>
    Access: Public<br>
    Path: <code>/articles/:id?query=params</code><br>
    Query:

    - expand (default none) - possible values (author, comment)

    <br>

    Response:

    - 201

      - data
        - id
        - title
        - cover
        - body
        - timestamp
        - author (optional)
        - comments (optional)
      - links

    - 404

      - message

    - 400

      - message
      - possible solution

    </details>

    <details>
    <summary>Update a book using PUT</summary>

    Method: PUT<br>
    Access: Private<br>
    Path: <code>/articles/:id</code><br>
    Request Body:

    - id (optional)
    - title
    - body
    - cover (optional)
    - status (default draft)

    <br>

    Response:

    - 200 / 201

      - message
      - article data
      - links
        - self

    - 400

      - message
      - data (Array of error message)
        - field
        - message

    - 401
      - message

    </details>

    <details>
    <summary>Update an article using PATCH</summary>

    Method: PATCH<br>
    Access: Private<br>
    Path: <code>/articles/:id</code><br>
    Request Body:

    - title (optional)
    - body (optional)
    - cover (optional)
    - status (default draft) (optional)

    <br>

    Response:

    - 200

      - message
      - article data
      - links
        - self

    - 404

      - message

    - 400

      - message
      - data (Array of error message)
        - field
        - message

    - 401
      - message

    </details>

    <details>
    <summary>Delete an article</summary>

    Method: DELETE<br>
    Access: Private<br>
    Path: <code>/articles/:id</code><br>
    Response:

    - 204
      - message
    - 404
      - message
    - 401
      - message

    </details>

    <details>
    <summary>Get all comments for a given article</summary>

    Method: GET<br>
    Access: Private<br>
    Path: <code>/articles/:id/comments</code><br>
    Query:

    - page (default 1) - current page number
    - limit (default 10) - the number of objects should be returned

    <br>

    Response:

    - 200

      - comments data
      - body
      - timestamp
      - author
        - id
        - name
      - pagination
      - page
      - limit
      - nextPage
      - prevPage
      - totalPage
      - totalBook
      - links
      - self
      - article
      - author
      - nextPage
      - prevPage

    - 404

      - message

    </details>

    <details>
    <summary>Create a new comment for a given article</summary>

    Method: Post<br>
    Access: Private<br>
    Path: <code>/articles/:id/comments</code><br>
    Request Body:

    - body

    <br>

    Response:

    - 201

      - message
      - comments data
        - body
        - timestamp

    - 404

      - message

    - 400
      - message

    </details>

    <details>
    <summary>Get author of the given article </summary>

    Method: GET<br>
    Access: Public<br>
    Path: <code>/articles/:id/author</code><br>
    Response:

    - 200

      - author data
        - name
        - email
      - links
        - self
        - article

    - 404
      - message

    </details>

<br>

- <b>Comment</b>

    <details>
    <summary>Get all comment</summary>

  Method: GET<br>
  Access: Private<br>
  Role: Admin, User<br>
  Description: User can see a list of their comments and admin can see a list of all comments<br>
  Path: <code>/comments?query=params</code><br>
  Query:

  - page (default 1) - current page number
  - limit (default 10) - the number of object should be returned
  - sortType (default desc) - the type of sort, it could be either asc or desc
  - sortBy (default updateAt) - the property that will used to sort. It could be either updatedAt or title.
  - postId - the id of the post

  <br>

  Response:

  - 200

    - comment data
    -

    </details>

    <details>
    <summary>Create a comment</summary>

    </details>

    <details>
    <summary>Update a comment</summary>

    </details>

    <details>
    <summary>Delete a comment</summary>

    </details>

<br>

- <b>User</b>

    <details>
    <summary>Get all users</summary>

    </details>

    <details>
    <summary>Get a single user</summary>

    </details>

    <details>
    <summary>Create an user</summary>

    </details>

    <details>
    <summary>Update an user</summary>

    </details>

    <details>
    <summary>Delete an user</summary>

    </details>

    <details>
    <summary>Change password</summary>

    </details>

<br>

- <b>Auth</b>

    <details>
    <summary>Create a new account</summary>

  Method: POST<br>
  Access: Public<br>
  Description: Create a new account<br>
  Path: <code>/auth/singup</code><br>
  Request Body:

  - user data

    - name
    - email
    - password

    <br>

  Response:

  - 201

    - code
    - message
    - data
      - access_token
    - links
      - self
      - singin

  - 400

    - code
    - error
    - data
      - field
      - message

    </details>

    <details>
    <summary>Signin to existing account</summary>

    Method: POST<br>
    Access: Public<br>
    Description: Singin to existing account<br>
    Path: <code>/auth/singin</code><br>
    Request Body:

    - user data
      - email
      - password

    <br>

    Response:

    - 200

      - code
      - message
      - data
        - access_token
      - links
        - self

    - 400

      - code
      - error
      - data
        - field
        - message

    </details>
