# Lecture 109 - API Design Practice using Swagger and OAS Part 1

#### my-blog-api.yaml (swagger api documentation)

```yaml
openapi: 3.0.0

info:
  version: 1.0.0
  title: FSArmy - My Blog API
  description: >-
    This is the first professional api project we creating in full-stack army.
    This is a simple blog api application where anyone can create a new account,
    login to their system and create articles that will be visible publicly.
  contact:
    name: FS Army
    url: https://fsarmy.com
    email: support@fsarmy.com

servers:
  # Added by API Auto Mocking Plugin
  - description: SwaggerHub API Auto Mocking
    url: https://virtserver.swaggerhub.com/FAYSAL151767/my-blog-api/1.0.0
  - description: Dev
    url: http://localhost:4000/api/v1

tags:
  - name: Auth
    description: Authentication Endpoints (public)
  - name: Article
    description: Article Endpoints (public + private)
  - name: Comment
    description: Comment Endpoints (private)
  - name: User
    description: User Endpoints (admin only)

paths:
  '/auth/signup':
    post:
      description: createw a new account
      tags: [Auth]
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                name:
                  type: string
                  example: Faysal Ahammed
                email:
                  type: string
                  format: email
                  example: ahammed@example.com
                password:
                  type: string
                  format: password
                  example: password1234
              required: [name, email, password]
      responses:
        '201':
          description: Singup successful
          content:
            'application/json':
              schema:
                type: object
                properties:
                  code:
                    type: integer
                    format: int32
                    example: 201
                  message:
                    type: string
                    example: Singup successful
                  data:
                    type: object
                    properties:
                      access_token:
                        type: string
                        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
                  links:
                    type: object
                    properties:
                      self:
                        type: string
                        example: '/auth/signup'
                      singin:
                        type: string
                        example: '/auth/signin'
        '400':
          $ref: '#/components/responses/400'
        '500':
          $ref: '#/components/responses/500'
  '/auth/signin':
    post:
      description: Login to your account
      tags: [Auth]
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                email:
                  type: string
                  format: email
                  example: ahammed@example.com
                password:
                  type: string
                  format: password
                  example: password1234
              required: [email, password]
      responses:
        '200':
          description: Singin successful
          content:
            'application/json':
              schema:
                type: object
                properties:
                  code:
                    type: integer
                    format: int32
                    example: 200
                  message:
                    type: string
                    example: Sigin successful
                  data:
                    type: object
                    properties:
                      access_token:
                        type: string
                        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
                  links:
                    type: object
                    properties:
                      self:
                        type: string
                        example: '/auth/signin'
        '400':
          $ref: '#/components/responses/400'
        '500':
          $ref: '#/components/responses/500'
  '/articles':
    get:
      tags: [Article]
      description: Retrive all published articles
      parameters:
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/limitParam'
        - $ref: '#/components/parameters/sortTypeParam'
        - $ref: '#/components/parameters/searchParam'
      responses:
        '200':
          description: Return a list of aritcles
          content:
            'application/json':
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      allOf:
                        - type: object
                          properties:
                            id:
                              type: integer
                              format: int32
                              example: 1
                            title:
                              type: string
                              example: First article
                            cover:
                              type: string
                              format: url
                              example: https://s3.aws.com/myfirstblog/123.jpg
                            author:
                              $ref: '#/components/schemas/AuthorDTO'
                            link:
                              type: string
                              format: url
                              example: '/articles/1'
                          required: [id, title, author]
                        - $ref: '#/components/schemas/Timestamp'
                  pagination:
                    $ref: '#/components/schemas/Pagination'
                  links:
                    type: object
                    properties:
                      self:
                        type: string
                        format: url
                        example: '/articles?page=2&limit=10'
                      next:
                        type: string
                        format: url
                        example: '/articles?page=2&limit=10'
                      prev:
                        type: string
                        format: url
                        example: '/articles?page=2&limit=10'
        '400':
          $ref: '#/components/responses/400'
        '500':
          $ref: '#/components/responses/500'
    post:
      operationId: createPost
      security:
        - bearerAuth: []
      description: Create a new article
      tags: [Article]
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                title:
                  type: string
                  example: First article
                body:
                  type: string
                  format: text
                  example: Body of the first article
                cover:
                  type: string
                  format: url
                  example: https://s3.aws.example.com/23nds
                status:
                  type: string
                  enum: [draft, published]
                  example: draft
              required: [title, body]
      responses:
        '201':
          description: Successfully created a new article
          content:
            'application/json':
              schema:
                type: object
                properties:
                  code:
                    type: integer
                    format: int32
                    example: 201
                  message:
                    type: string
                    example: Article created successfully
                  data:
                    $ref: '#/components/schemas/Article'
                  links:
                    type: object
                    properties:
                      self:
                        type: string
                        format: url
                        example: '/articles/1'
                      author:
                        type: string
                        format: url
                        example: '/articles/1/author'
                      comments:
                        type: string
                        format: url
                        example: 'articles/1/comments'
        '400':
          $ref: '#/components/responses/400'
        '401':
          $ref: '#/components/responses/401'
        '500':
          $ref: '#/components/responses/500'

components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
  schemas:
    Article:
      allOf:
        - type: object
          properties:
            id:
              type: integer
              format: int32
              example: 1
            authorId:
              type: integer
              format: int32
              example: 1
            title:
              type: string
              example: First article
            body:
              type: string
              format: text
              example: The body of the first article
            cover:
              type: string
              format: url
              example: https://s3.aws.example.com/23nds
            status:
              type: string
              enum: [draft, published]
              example: draft
          required: [id, authorId, title, body, status]
        - $ref: '#/components/schemas/Timestamp'
    Timestamp:
      type: object
      properties:
        createdAt:
          type: string
          format: datetime
        updatedAt:
          type: string
          format: datetime
      required: [createdAt, updatedAt]
    AuthorDTO:
      type: object
      properties:
        id:
          type: integer
          format: int32
          example: 1
        name:
          type: string
          example: 'A.B Raihan'
      required: [id, name]
    Pagination:
      type: object
      properties:
        page:
          type: integer
          format: int32
          example: 2
        limit:
          type: integer
          format: int32
          example: 10
        next:
          type: integer
          format: int32
          example: 3
        prev:
          type: integer
          format: int32
          example: 1
        totalPage:
          type: integer
          format: int32
          example: 5
        totalItems:
          type: integer
          format: int32
          example: 50
      required: [page, limit, totalPage, totalItems]

  responses:
    '500':
      description: Internal server error
      content:
        'application/json':
          schema:
            type: object
            properties:
              code:
                type: integer
                format: int32
                example: 500
              error:
                type: string
                example: Internal server error
              message:
                type: string
                example: We are sorry for the inconvenience. Please try again later.
    '400':
      description: Bad request
      content:
        'application/json':
          schema:
            type: object
            properties:
              code:
                type: integer
                format: int32
                example: 400
              error:
                type: string
                example: Bad request
              data:
                type: array
                items:
                  type: object
                  properties:
                    field:
                      type: string
                      example: email
                    message:
                      type: string
                      example: Invalid email
                    in:
                      type: string
                      enum: [query, body]
                      example: body
    '401':
      description: Unauthorized
      content:
        'application/json':
          schema:
            type: object
            properties:
              code:
                type: integer
                format: int32
                example: 401
              error:
                type: string
                example: Unauthorized
              message:
                type: string
                example: You don't have the right permission.
  parameters:
    pageParam:
      in: query
      name: page
      description: Current page number
      schema:
        type: integer
        format: int32
        example: 2
    limitParam:
      in: query
      name: limit
      description: Maximum items to be returned
      schema:
        type: integer
        format: int32
        example: 10
    sortTypeParam:
      in: query
      name: sort_type
      description: Type of sort (asc or dsc)
      schema:
        type: string
        enum: [asc, dsc]
        example: dsc
    sortByParam:
      in: query
      name: sort_by
      description: Sort key
      schema:
        type: string
        example: updatedAt
    searchParam:
      in: query
      name: search
      description: Search term
      schema:
        type: string
        example: title
```
