# Lecture 106 - API Project SRS, Check List & YAML

#### API Design using Open API Specification (v-3.1.0) and Swagger

### Outline

1. [<b>Project Idea</b>](#1)
2. [<b>Check List - Beginner</b>](#2)
3. [<b>Check List - Expert</b>](#3)
4. [<b>SRS - Software Requirement Specification</b>](#4)
5. [<b>YAML - 1.2.2</b>](#5)
6. [<b>Open API Specification - 3.1.0</b>](#6)

<a id="1"></a>

### Project Idea

A plan to implement a REST API for a blog management system. Several special options will be available. All of the posts and comments made by users are accessible publicly. Users must be logged in to their accounts in order to make posts or comments. Each user has control over their own posts. Everything needs to be managed by the admin. The user can add a custom cover image to the post.

<br>

<a id="2"></a>

### Check List - Beginner

- [ ] Start Writing Code
- [ ] Get Stuck
- [ ] Take infinity amount of time to finish

<br>

<a id="3"></a>

### Check List - Expert

- [ ] Elaborate the requirements and create a formal / semi formal SRS
- [ ] Analyze The SRS
- [ ] Find possible entities
- [ ] Design the ER Diagram
- [ ] Figure out possible API Endpoints
- [ ] Write down the specs for each endpoint
- [ ] Design the API using Open API Spec (will automatically generate the docs)
- [ ] Project Roadmap
- [ ] <b>Implement The API (Development)</b>
- [ ] <b>Write Automatic Tests (Development)</b>

<br>

<a id="4"></a>

### SRS - Software Requirement Specification

1.  Introduction

    The Blog REST API Application is a collection of public api endpoints that enables users to create, manage, and interact with a single author blog. The backend application provides authentication functionality, allows users to create and view articles, comment on articles and upload cover photos for articles. This document outlines the functional and non-functional requirements for the development of the Blog REST API Application.

<br>

2.  System Overview

    The Blog REST API Application aims to provide a seamless user experience while ensuing the security and integrity of user data. It allows users to browse articles without authentication, but authentication is required for commenting. Administrators have access to an admin dashboard for managing articles, comments, and cover photos.

<br>

3.  Functional Requirements

    a. Authentication

    - Users should be able to register for an account by providing their email address and a secure password.
    - Users should be able to log in securely using their email address and password.
    - Administrators should be able to log in securely using their credentials.

    b. User Management

    - Admin can create new users
    - Admin can see a list of users
    - Admin can update or delete users
    - Admin can change password for any user

    c. Article Management

    - Authenticated users should be able to create, edit, and delete their own articles.
    - Articles should contain a title, content, and an optional cover photo.
    - Any users should be able to view a list of all articles and retrieve individual articles.

    d. Commenting

    - Authenticated users should be able to post comments on articles.
    - Comments should include the author's name, email. (optional), and the comment text.
    - Users should be able to view comments associated with an article.
    - Admin can manage comments

    e. Cover Photo Management

    - Authenticated users should be able to upload and update a cover photo for their articles.
    - The system should support various image formats and validate uploaded cover photos.

<br>

4.  Non-Functional Requirements

    a. Security

    - User passwords must be securely stored using appropriate hashing and salting techniques.
    - API endpoints handling sensitive information should be protected using secure protocols (HTTPS).
    - Authentication tokens should be securely generated and validated to prevent unauthorized access.

    b. Performance

    - The API should be able to handle a high volume of concurrent requests efficiently.
    - Response times should be optimized to ensure a responsive user experience.

    c. Scalability

    - The application should be designed to accommodate future growth and increasing user demands.
    - The architecture should allow for horizontal scalability, such as load balancing and distributed processing.

    d. Reliability

    - The API should be highly available, minimizing downtime and ensuring data integrity.
    - Error handling and logging should be implemented to facilitate troubleshooting and maintenance.

<br>

5.  Constraints

    - The Blog REST API Application should be implemented using a specific programming language or framework.
    - The API may depend on external services or libraries for certain functionalities (e.g., email verification).

<br>

6.  Usr Interface

    - The Blog REST API Application does not include a user interface. It solely provides a back-end API for integration with front-end applications or clients.

<br>

7.  Glossary

    - API: Application Programming Interface
    - SRS: Software Requirements Specification
    - HTTPS: Hypertext Transfer Protocol Secure

<br><br>

<a id="5"></a>

### YAML - [1.2.2](https://yaml.org/spec/1.2.2/)

YAML (a recursive acronym for "YAML Ain't Markup Language") is a data serialization language designed to be human-friendly and work well with modern programming languages for common everyday tasks.
<br>
🔥 One of the most common uses for YAML is to create configuration files.

##### Scalar Types

- Integer
- Float
- String
- Boolean
- Date

       n1: 1            # integer
       n2: 1.234        # float

       s1: 'abc'        # string
       s2: "abc"        # string
       s3: abc          # string

       b: false         # boolean type

       d: 2015-04-05    # date type

       # integer tags
       canonical: 12345
       decimal: +12, 345
       sexagecimal: 3:25:45
       octal: 014
       hexadecimal: 0xC

       # floating tags
       canonical: 1.23015e+3
       exponential: 12.3015e+02
       sexagecimal: 20:30.15
       fixed: 1,230.15
       negative infinity: -.inf
       not a number: .NaN

       # miscellaneous tags
       null: ~
       true: y
       false: n

<br>

Examples:

- Example 1 - package.json

        {
            "name": "oas",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "keywords": [
                "json",
                "yaml"
            ],
            "author": "",
            "license": "ISC"
        }

    <br>

        name: oas
        version: 1.0.0
        description: ''
        main: index.js
        scripts:
            test: 'echo "Error: no test specified" && exit 1'
        keywords:
            - json
            - yaml
        author: ''
        license: ISC

<br>

- Example 2 - multi line and folded string

        description1: | # multiline
            hello
            world

        description2: > # folded
            hello
            world

    <br>

       {
        "description1": "hello\nworld\n",
        "description2": "hello world\n"
       }

<br>

- Example 3 - Variables / Reference

        some_thing: &VAR_NAME foobar
        other_thing: *VAR_NAME

        values: &ref
            - will be
            - reused below

        other_values:
            i_am_ref: *ref

    <br>

        {
            "some_thing": "foobar",
            "other_thing": "foobar",

            "values": [
                "will be",
                "reused below"
            ],

            "other_values": {
                "i_am_ref": [
                    "will be",
                    "reused below"
                ]
            }
        }

<br>

##### Collections

YAML includes block collections which use indentation for scope. Here, each entry begins with a new line. Block sequences in collections indicate each entry with a dash and space (-). In YAML, block collections styles are not denoted by any specific indicator. Block collection in YAML can distinguished from other scalar quantities with an identification of key value pair included in them.
<br><br>
Mappings are the representation of key value as included in JSON structure. It is used often in multi-lingual support systems and creation of API in mobile applications. Mappings use key value pair representation with the usage of colon and space( : ).

<br>

Examples:

- Example 1 - Sequence (<code>Array</code>)

        - Mark McGwire
        - Sammy Sosa
        - Ken Griffey

    <br>

        [
         "Mark McGwire",
         "Sammy Sosa",
         "Ken Griffey"
        ]

<br>

- Example 2 - Mapping (<code>Object</code>)

        hr: 65      # Home runs
        avg: 0.278  # Batting average
        rbi: 147    # Runs Batted In

    <br>

        {
         "hr": 65,
         "avg": 0.278,
         "rbi": 147
        }

<br>

- Example 3 - Mapping to Sequence

        attributes:
            - a1
            - a2
        methods: [getter, setter]

    <br>

        {
         "attributes": ["a1", "a2"],
         "methods": ["getter", "setter"]
        }

<br>

- Example 4 - Sequence of Mapping (<code>Array of Object</code>)

        children:
           - name: Jimmy Smith
             age: 15
           - name: Jimmy Smith
             age: 15

           -
             name: Sammy Sosa
             age: 12

    <br>

       {
         "children": [
          {"name": "Jimmy Smith","age": 15},
          {"name": "Jimmy Smith","age": 15},
          {"name": "Sammy Sosa","age": 12}
        ]
       }

<br>

- Example 5 - Sequence of Sequence (<code>Array of Array</code>)

         my_sequences:
           - [1, 2, 3]
           - [4, 5, 6]
           -
             - 7
             - 8
             - 9
             - 0

    <br>

       {
         "my_sequences: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9, 0]
         ]
       }

<br>

- Example 6 - Mapping of Mappings (<code>Object of Objects</code>)

        Mark McGwire: {hr: 65, avg: 0.278}
        Sammy Sosa: {
            hr: 63,
            avg: 0.288
        }
        Mark Henry:
            hr: 65
            avg: 0.301

    <br>

       {
         "Mark McGwire": {
            "hr": 65,
            "avg": 0.278
         },
         "Sammy Sosa": {
            "hr": 63,
            "avg": 0.288
         },
         "Mark Henry": {
            "hr": 65,
            "avg": 0.301
         }
       }

<br>

- Example 7 - Nested Collections

          Jack:
            id: 1
            name: France
            salary: 25000
            hobby:
                - a
                - b
            location:
                country: A
                city: A-A

    <br>

          {
          "Jack": {
              "id": 1,
              "name": "France",
              "salary": 25000,
              "hobby": [
                  "a",
                  "b"
              ],
              "location": {
                  "country": "A",
                  "city": "A-A"
                }
              }
            }

<br>

<a id="6"></a>

### Open API Specification - [3.1.0](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md)

[📎Swagger Editor](https://editor.swagger.io/)

Base Structure of the Open API Specification

    openapi: 3.1.0 # required: vesion number of th specification that is being used
    info: {} # type: InfoObject - metadata about the api
    servers: [] # type: Server Object - an array of server objects
    tags: [] # type: Tag object - an array of tags used by the document with additional meta data
    security: [] # type: Security Requirement Object - an array of supported authorization techniques
    paths: {} # type: Path Object - required: the available paths and operations for the api
    components: {} # the container of various reusable schemas for the document
