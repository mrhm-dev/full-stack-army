# Lecture 101 - Introduction to API Design

## REST API Design

### Outline

1. [<b>Introduction to REST API</b>](#1)
   <ol type="a">
   <li>Overview of REST principles</li>
   <li>Benefits of REST architecture</li>
   <li>Key concepts (resources, representations, stateless communication)</li>
   </ol>
   <br>

2. [<b>HTTP Basics</b>](#2)
   <ol type="a">
   <li>Understanding HTTP methods (GET, POST, PUT, PATCH, DELETE)</li>
   <li>Status codes and their meanings</li>
   <li>Request and response headers</li>
   <li>URI (Uniform Resource Identifier) structure</li>
   </ol>
   <br>

3. [<b>Designing Resources</b>](#3)
   <ol type="a">
   <li>Identifying resources and their relationships</li>
   <li>Resource naming conventions (URL structure)</li>
   <li>Versioning resources</li>
   <li>Resource representations (JSON, XML etc.)</li>
   </ol>
   <br>

<a id="1"></a>

## Introduction to REST API

REST stands for <b>Representational State Transfer</b>. It is a set of architectural principles for designing <b>web services</b>. RESTful APIs are designed to be easy to use, scalable, and maintainable.

<b>The six REST principles are:</b>

1.  <b>Uniform Interface</b>
    <p>The uniform interface principle states that all resources should be accessed using the same HTTP methods <b>(GET, POST, PUT, PATCH, DELETE)</b>. This makes it easy for clients to learn how to use the API.</p>

    <p>For example - To get a list of all users, a client would use the GET method on the URL "<code>/users</code>". To create a new user, a client would use the POST method on the URL "<code>/users</code>". To update an existing user, a client would use the PUT method on the URL "<code>/users/123</code>". To delete an existing user, a client would use the DELETE method on the URL "<code>/users/123</code>".</p>

2.  <b>Client-Server</b>
    <p>The client-server principle states that the client and server should be independent of each other. This means that the client should not need to know anything about the serve's implementation in order to use the API.</p>

    <p>For example - A client that uses a RESTful API to get a list of users should not need to know how the server stores the users' data. The client should only need to know the URL of the resource (in this case, "<code>/users</code>").</p>

3.  <b>Statelessness</b>
    <p>The statelessness principle states that each request form the client should be independent of the previous requests. This means that the server does not need to maintain any state information about the client.</p>

    <p>For example - A client that uses a RESTful API to get a list of users should not need to provide any authentication information. The serer should be able to return the list of users without knowing anything about the client.</p>

4.  <b>Cacheability</b>
    <p>The cacheability principle states that resources can be cached by the client or by intermediary systems. This can improve performance by reducing the number of request that need to b made to the server.</p>

    <p>For example - A client that uses a RESTful API to get a list of users can cache the list of users. This means that the client does not need to make a request to the server every time it need to get a list of users.</p>

5.  <b>Layered System</b>
    <p>The layered system principle states that the API can be implemented as a layered system. This means that the API can be divided into different layers, each of which can be implemented independently.</p>

    <p>For example - A RESTful API for a social media application could be implemented as a layered system. The first layer could handle authentication and authorization. The second layer could handle resource management. The third layer could handle data access.</p>

6.  <b>Code on Demand</b>
    <p>The code on demand principle states that the API can be used to download executable code. This can be useful for extending the client's functionality.</p>

    <p>For example - A RESTful API for a game could be used to download new levels or characters. This would allow the client to be updated without having to download the entire game again.</p><br>

<b>Step-by-step Guidelines</b>

<p>Here are some step-by-step guidelines fr designing a RESTful API:</p>

1.  Identify the resources.The first step is to identify the resources that will be exposed by the API. A resource can be anything that can be named, such as a user, a product, or an order.

2.  Determine the HTTP methods. The next step is to determine the HTTP methods that will be used to access the resources. The most common HTTP methods are GET, POST, PUT, PATCH and DELETE.

3.  Create URLs for the resources. Each resource should have a unique URL. URIs should be consistent and easy to remember.

4.  Define the payloads. The payload is the data that is sent to the server or returned form the server. The payload format should be consistent for all resources.

5.  Test the APi. Once tha API is designed, it should be tested to make sure that is works as expected.

<b>Example</b>

<p>Here are some examples of RESTful APIs:</p>

- The GitHub API allows developers to access information about GitHub repositories.

- The Twitter API allows users to access information about tweets.

- The Google Maps API allows developers to access information about maps and directions.

<br>

<b>Key Components of a REST API</b>

1.  Resources:

    - Resources represent the key entities or objects in your system that are exposed through the API.

    - Each resource should have a unique identifier (URI) and can have multiple representations.

2.  URI (Uniform Resource Identifier):

    - URIs are used to uniquely identify and address resources in a RESTful API.

    - URIs follow a hierarchical structure, allowing clients to navigate and interact with resources.

3.  HTTP Methods (Verbs):

    - HTTP methods define the actions that can be performed on resources.

    - Commonly used methods in RESTful APIs incudes GET, POST, PUT, PATCH and DELETE.

4.  Headers:

    - Headers contain additional metadata and instructions for the server and client.

    - Headers can include information like authentication credentials, content type, caching instructions, etc.

5.  Request and Response:

    - Requests are made by clients to perform actions on resources.

    - Responses are sent by the server in response to client requests and contain the result or status of the operation.

6.  Representation:

    - Representations define how resources are structured and presented in requests and responses.

    - Representations can be in various formats such as JSON, XML, HTML, or binary data.

7.  Status Codes:

    - HTTP status codes indicate the outcome of a client's request.

    - Common status codes include 200 (OK), 201 (Created), 400 (BAd REquest), 404 (Not Found), 500 (Internal Server Error), etc.

8.  Parameters:

    - Parameters allow clients to provide additional data or instructions to the server.

    - Parameters can be included in the URL (query parameters) or the request body (form parameters or request payload).

9.  Authentication and Authorization:

    - Authentication ensures that the client is a valid and authorized user of the API.

    - Authorization defines what actions a user is allowed to perform on resources based on their role or permissions.

10. Error Handling:

    - APIs should have proper error handling mechanisms to provide meaningful error responses in case of failures or invalid requests.

    - Error responses should include appropriate status codes, error messages, and possibly error details or codes.

11. Pagination and Filtering:

    - For resources with large datasets, APIs often provide mechanisms for pagination to retrieve data in chunks.

    - Filtering allows clients to request a subset of resources based on specific criteria or parameters.

12. Versioning:

    - Versioning allows APIs to evolve over time without breaking existing client integrations.

    - APIs can be versioned using URL path, query parameters, or custom headers.

13. Hypermedia:

    - Hypermedia, often referred to as HATEOAS (Hypermedia as the Engine of Application State), enables the API to include links to related resources in responses.

    - Clients can dynamically navigate the API by following these hypermedia links.

<br>

<b>Benefits of REST Architecture:</b>

1.  Scalability and Performance:

    - RESTful APIs are stateless, allowing them to handle a large number of concurrent requests efficiently.

    - Load balancing techniques can be applied to distribute traffic across multiple servers, improving scalability.

    - Caching mechanisms can be employed to reduce server load and enhance performance.

2.  Simplicity and Ease of Use:

    - REST leverages familiar HTTP protocols and methods making it easy for developers to understand and use.

    - It has a lightweight and intuitive design, which promotes simplicity in API development.

    - RESTful APIs can be accessed using standard web technologies and tools.

3.  Flexibility and Modifiability:

    - REST allows for loose coupling between the client and server, enabling independent evolution of both.

    - It facilitates the addition, modification, or removal of resources without impacting existing clients.

    - Changes in representations and business logic can be implemented without affecting the API interface.

4.  Compatibility and Interoperability:

    - RESTful APIs are platform-independent, enabling communication between heterogeneous systems.

    - They can be consumed by a variety of clients, including web browsers, mobile apps and other services.

    - REST promotes the use of standard data formats like JSON and XML, enhancing interoperability.

5.  Security and Reliability:

    - REST supports various security mechanisms, such as SSL/TLS encryption and token-based authentication.

    - It integrates well with existing security infrastructures, providing robust security measures.

    - RESTful APIs are designed to be reliable, with build-in mechanisms for error handling and retying.

<a id="2"></a>

## HTTP Basics

<b>HTTP Methods and their usages:</b>

<table>
  <tr>
    <th>HTTP Method</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td><b>GET</b></td>
    <td>Retrieve a representation of a resource or a resource collection</td>
  </tr>
  <tr>
    <td><b>POST</b></td>
    <td>Create a new resource or perform a specific action</td>
  </tr>
  <tr>
    <td><b>PUT</b></td>
    <td>Replace and entire resource with a new representation</td>
  </tr>
  <tr>
    <td><b>PATCH</b></td>
    <td>Update a specific part of a resource</td>
  </tr>
  <tr>
    <td><b>DELETE</b></td>
    <td>Delete a resource or a resource collection</td>
  </tr>
  <tr>
    <td>HEAD</td>
    <td>Retrieve the headers of a resource without the body</td>
  </tr>
  <tr>
    <td>OPTIONS</td>
    <td>Retrieve the available methods and options for a resource</td>
  </tr>
</table><br>

<b>HTTP Status Code and their usages:</b>

<table>
  <tr>
    <th>HTTP Status Code</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td><b>200</b></td>
    <td>OK - The request was successful and the response contains data</td>
  </tr>
  <tr>
    <td><b>201</b></td>
    <td>Created - A new resource was successfully created</td>
  </tr>
  <tr>
    <td>204</td>
    <td>No Content - The request was successful, but there is no data</td>
  </tr>
  <tr>
    <td>304</td>
    <td>Not Modified - The requested resource has not been modified</td>
  </tr>
  <tr>
    <td><b>400</b></td>
    <td>Bad Request - The request is malformed or has invalid data</td>
  </tr>
  <tr>
    <td>401</td>
    <td>Unauthorized - Authentication is required for the request</td>
  </tr>
  <tr>
    <td><b>403</b></td>
    <td>Forbidden - The server understood the request, but refused it</td>
  </tr>
  <tr>
    <td><b>404</b></td>
    <td>Not Found - The requested resource does not exist</td>
  </tr>
  <tr>
    <td>405</td>
    <td>Method Not Allowed - The requested method is not allowed</td>
  </tr>
  <tr>
    <td>500</td>
    <td>Internal Server Error - An unexpected error occurred</td>
  </tr>
  <tr>
    <td><b>503</b></td>
    <td>Service Unavailable - The server is currently unavailable</td>
  </tr>
</table>

[More](https://www.npmjs.com/package/http-status-codes)

<br>

<b>Request Header and their usages:</b>

<table>
  <tr>
    <th>Request Header</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td>Accept</td>
    <td>Specifies the desired response content type</td>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>Provides credentials for authentication</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>Specifies the media type of the request payload</td>
  </tr>
  <tr>
    <td>Content-Length</td>
    <td>Indicates the length of the request payload</td>
  </tr>
  <tr>
    <td>User-Agent</td>
    <td>Identifies the user agent making the request</td>
  </tr>
  <tr>
    <td>Cache-Control</td>
    <td>Specifies caching directives for the request and response</td>
  </tr>
  <tr>
    <td>Cookie</td>
    <td>Includes previously stored cookies for server identification</td>
  </tr>
  <tr>
    <td>If-Match</td>
    <td>Performs conditional requests based on the entity's current state</td>
  </tr>
  <tr>
    <td>If-None-Match</td>
    <td>Performs conditional requests based on the entity's current state</td>
  </tr>
  <tr>
    <td>If-Modified-Since</td>
    <td>Performs conditional requests based on the entity's last modified date</td>
  </tr>
  <tr>
    <td>Referer</td>
    <td>Indicates the URl of the referring resource</td>
  </tr>
  <tr>
    <td>Host</td>
    <td>Specifies the target host and port for the request</td>
  </tr>
</table>
<br>

<b>Response Header and their usages:</b>

<table>
  <tr>
    <th>Content-Type</th>
    <th>Specifies the media type of the response payload</th>
  </tr>
  <tr>
    <td>Content-Length</td>
    <td>Indicates the length of the response payload</td>
  </tr>
  <tr>
    <td>Cache-Control</td>
    <td>Specifies caching directives for the response</td>
  </tr>
  <tr>
    <td>ETag</td>
    <td>Provides an entity tag for versioning and caching</td>
  </tr>
  <tr>
    <td>Last-Modified</td>
    <td>Indicates tha last modified date of the response content</td>
  </tr>
  <tr>
    <td>Location</td>
    <td>Specified the URL for redirection or newly created resources</td>
  </tr>
  <tr>
    <td>Access-Control-Allow-Origin</td>
    <td>Defines the allowed origins for cross-origin resource sharing</td>
  </tr>
  <tr>
    <td>Set-Cookie</td>
    <td>Sets a cookie in the client's browser for session management</td>
  </tr>
  <tr>
    <td>Expires</td>
    <td>Specifies the expiration date/time of the response</td>
  </tr>
  <tr>
    <td>WWW-Authenticate</td>
    <td>Challenges the client to provide authentication credentials</td>
  </tr>
  <tr>
    <td>Server</td>
    <td>Identifies tha server software/version in the response</td>
  </tr>
  <tr>
    <td>X-Powered-By</td>
    <td>Indicates the technology or framework powering the server</td>
  </tr>
</table>
<br>

<b>Custom Request Headers:</b>

1.  X-Api-Key: Used to send a API key for authentication or authorization purposes.<br>
    Example: <code>X-Api-Key: YOUR_API_KEY</code>

2.  X-Custom-Header: Used to include additional custom metadata in the request.<br>
    Example: <code>X-Custom-Header: SomeValue</code>

3.  X-Requested-With: Indicates the type of request (e.g., XMLHttpRequest) made by the client.<br>
    Example: <code>X-Requested-With: XMLHttpRequest</code>
    <br>

<b>Custom Response Headers:</b>

1.  X-RateLimit-Limit: Indicates the maximum number of requests a client is allowed within a given time frame.<br>
    Example: <code>X-RateLimit-Limit: 1000</code>

2.  X-RateLimit-Remaining: Indicates the number of remaining requests the client can make within the current time frame.<br>
    Example: <code>X-RateLimit-Remaining: 500</code>

3.  X-Custom-Header: Used to include additional custom metadata in the response.<br>
    Example: <code>X-Custom-Header: SomeValue</code>

4.  Access-Control-Expose-Headers: Specifies which custom headers can be accessed by the client in cross-origin resource sharing (CORS) scenarios.<br>
    Example: <code>Access-Control-Expose-Headers: X-Custom-Header</code>

<br>

<b>Structure of the URI (Uniform Resource Identifier)</b>

<p>The structure of a URI (Uniform Resource Identifier) consists of several components that help identify and locate a resource. A URI can be divided into the following parts:</p>

1.  Scheme:

    - The scheme indicates the protocol or mechanism use dto access the resource.

    - Examples: <code>"http://", "https://", "ftp://", "file://", "milto:"</code>

2.  Authority:

    - The authority portion identifies the server or network location where the resource resides.

    - It typically includes the hostname and, optionally, the port number.

    - Example: <code>"example.com", "api.example.com:8080"</code>

3.  Path:

    - The path specifies the hierarchical structure or path to the resource on the server.

    - It typically includes the hostname and, optionally, the port number.

    - Example: <code>"/users", "/products/123", "/files/documents/report.pdf"</code>

4.  Query Parameters:

    - Query parameters provide additional information to the server for processing the request.

    - They are appended to the URi after a question mark (?) and separated by ampersands (&).

    - Example: <code>"/search?q=keyword&page=1&limit=10"</code>.

5.  Fragment:

    - The fragment identifier refers to a specific part or section within the resource.

    - It is preceded by a hash symbol (#) and is commonly used in web pages to navigate to specific sections.

    - Example: <code>"/document.pdf#page=3", "/article.html#section-2"</code>.

- Example URL: `"https://api.example.com/users?role=admin#section-profile"`

<a id="3"></a>

## Designing Resources

<p>Designing resources in a REST API involves identifying the key entities or objects in your system and representing them in a structured and intuitive manner. Here's a step-by-step guide on how to design resources in a REST API with examples:</p>

1.  Identify Key Entities:

    - Determine the core entities or objects in your system that you want to expose through the API.

    - Examples: Users, products, orders, blog posts.

2.  Determine Resource RElationships:

    - Identify the relationships and associations between the entities.

    - Determine how these relationships can be represented in the API.

    - Examples: A use can have multiple orders, a product can belong to a category.

3.  Define Resource URIs:

    - Choose clear and meaningful names for your resources that reflect their purpose.

    - Use nouns or noun phrases to represent resources.

    - Examples: User, Product, Order.

4.  Design Resource URIs:

    - Assign a unique URI (Uniform Resource Identifier) to each resource.

    - The URI should reflect the hierarchy and organization of the resources.

    - Examples:
      - Users: <code>"/users"</code>
      - User with ID 123: <code>"/users/123"</code>
      - Products: <code>"/products"</code>
      - Products with ID 456: <code>"/products/456"</code>
      - GET /users
      - POST /users
      - GET /users/{id}
      - PUT /users/{id}
      - PATCH /users/{id}
      - DELETE /users/{id}
      - GET /users/{id}/profile
      - GET /users/{id}/experiences
      - GET /users/{id}/experiences/{eid}
      - PUT /users/{id}/experiences/{eid}
      - GET /experiences/{id}/users/{uid}

<br>

5.  Determine Resource Representations:

    - Decide on the structure and format of the resource representations.

    - Use commonly accepted formats like <b>JSON</b> or XML.

    - Include relevant attributes and relationships in the representations.

    - Examples:

      - JSON representation of a user:

            {
               "id": 123,
               "name": "John doe",
               "email": "john@example.com"
            }

      - JSON representation of a product:

            {
               "id": 456,
               "name": "Widget",
               "price": 9.99,
               "category": "Electronics"
            }

<br>

6.  Define CRUD Operations:

    - Determine the CRUD (Create, REad, Update, Delete) operations that can be performed on each resource.

    - Map these operations to appropriate HTTP methods.

    - Examples:

      - Create an user: <code>POST /user</code>
      - Retrieve an user: <code>GET /users/123</code>
      - Update an user: <code>PUT /users/123</code>
      - Delete an user: <code>DELETE /users/123</code>

<br>

7.  Consider Resource Collections:

    - If your resource represents a collection of items, consider providing endpoints to retrieve and manipulate the collection as a whole.

    - Examples:
      - Retrieve all users: <code>GET /users</code>
      - Create multiple products: <code>POST /products</code>

<br>

8.  Handle Resource Relationships:

    - If your resources have relationships, design the URI structure and actions to manage these relationships.

    - Provide mechanisms to navigate and access related resources.

    - Examples:

      - Retrieve orders for a user: <code>GET /users/123/orders</code>

      - Add a product to a user's favorites: <code>POST /users/123/favorites</code>

<br>

<b>Resource Naming Conventions & Versioning</b>

<p>Resource naming conventions, specifically the URL structure, play a crucial role in designing a REST API. Here are some commonly followed conventions and best practices for naming resources in a REST API:</p>

1.  Use Nouns to Represent Resources:

    - Choose nouns or noun phrases to represent resources in the URL.

    - Avoid verbs or actions in the URL as the HTTP method indicates the action.

    - Examples:

      - <code>/users</code> instead of <code>/getUsers</code>
      - <code>/products</code> instead of <code>/retrieveProducts</code>

<br>

2.  Use Plural Nouns for Resource Collections:

    - Use plural nouns to represent collections of resources.

    - Collections typically represent multiple instances of a resource.

    - Example:

      - <code>/users</code> for a collection of user resources
      - <code>/products</code> for a collection of product resources.

<br>

3.  Use Singular Nouns for Individual Resources:

    - Use singular nouns to represent individual resources within a collection.

    - Each individual resource is identified by a unique identifier.

    - Examples:

      - <code>/users/123</code> for a specific usr with ID 123
      - <code>/products/456</code> for a specific product with ID 456

<br>

4.  Use Hierarchical Structure for Related Resources:

    - Use a hierarchical structure to represent relationships between resources.
    - Place related resources as sub-resources under their parent resources.
    - Examples:

      - <code>/users/123/orders</code> for orders belonging to user with ID 123
      - <code>/categories/789/products</code> for products belonging to category with ID 789

<br>

5.  Avoid Deep Nesting in URL Structure:

    - Limit the depth of nesting in the URL structure to keep it simple and maintainable.
    - Excessive nesting can lead to long and complex URLs.
    - Consider flattening the structure or using query parameters for complex filtering or searching operations.

<br>

6.  Use Hyphens or Underscores for Readability:

    - Use hyphens (-) or underscores (\_) to separates words in the URL for readability.
    - Choose one convention and be consistent throughout the API.
    - Examples:

      - <code>/product-reviews</code> or <code>product_reviews</code> for reviews associated with products

<br>

7.  Avoid Using File Extensions:

    - Avoid including file extensions (e.g., <code>.html</code>, <code>.json</code>) in the URL for resources.
    - Instead, rely on content negotiation using the <code>Accept</code> header to specify the desired representation format.

<br>

8.  Versioning:

    - Consider including versioning information in the URL to manage API changes and backward compatibility.
    - Examples:

      - <code>/v1/users</code> for version 1 of the users resource
      - <code>/v2/users</code> for version 2 of the users resource
