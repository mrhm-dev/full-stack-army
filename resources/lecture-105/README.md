# Lecture 105 - REST API Theory Final Summary

## REST API Design

### Outline

1. [<b>Error Handling and Status Codes</b>](#1)
   <ol type="a">
   <li>Common error scenarios and status codes</li>
   <li>Structuring error responses (error objects)</li>
   <li>Error handling strategies (e.g., returning meaningful error messages)</li>
   <li>Exception handling and error logging</li>
   </ol>
   <br>
2. [<b>HATEOAS (Hyper as the Engine of Application State)</b>](#2)
   <ol type="a">
   <li>Understanding the concept of HATEOAS</li>
   <li>Benefits and challenges of implementing HATEOAS</li>
   <li>Designing hypermedia links and resource navigation</li>
   </ol>
   <br>
3. [<b>Documentation and API Standards</b>](#3)
   <ol type="a">
   <li>Importance of API documentation</li>
   <li>Generating API documentation (Swagger, OpenAPI)</li>
   <li>API versioning and deprecation policies</li>
   <li>Consistency in API design and naming conventions</li>
   </ol>
   <br>
4. [<b>Best Practices and Design Patterns</b>](#4)
   <ol type="a">
   <li>Keeping APIs simple and intuitive</li>
   <li>Designing for extensibility and future changes</li>
   <li>Handling API versioning gracefully</li>
   <li>Testing and documenting APIs</li>
   </ol>
   <br>

<a id="1"></a>

## Error Handling and Status Codes

##### Common error scenarios and status codes

1.  400 Bad Request:

    - The server cannot process the request due to client error or malformed request syntax.
    - Common scenarios: Invalid parameters, missing required fields, or validation errors.

<br>

2.  401 Unauthorized:

    - The client is not authenticated and needs to provide valid credentials for access.
    - Common scenarios: Missing or invalid authentication credentials, expired or revoked tokens.

<br>

3.  403 Forbidden:

    - The client is authenticated, but does nto have sufficient permissions to access the requested resource.
    - Common scenarios: Accessing restricted resources, performing unauthorized actions.

<br>

4.  404 Not Found:

    - The requested resource could not be found on the server.
    - Common scenarios: Non-existent endpoints, invalid resource identifiers.

<br>

5.  405 Method Not Allowed:

    - The requested HTTP method is not allowed for the given resource.
    - Common scenarios: Attempting to use an unsupported HTTP method for a specific resource.

<br>

6.  409 Conflict:

    - The server detected a conflict with the current state of the resource.
    - Common scenarios: Duplicated resource creation, conflicting updates.

<br>

7.  500 Internal Server Error:

    - An unexpected error occurred on the server, indicating a server-side issue.
    - Common scenarios: Unhandled exceptions, database errors, or infrastructure failures.

<br>
<br>

##### Structuring error responses (error objects)

1.  Use a Consistent Error Object Structure:

    - Define a consistent structure for error objects across your API to ensure uniformity and ease of handling for clients.
    - Use consistent field names to represent different aspects fo the error.

<br>

2.  Include and Error Status Code:

    - Include and 'status' or 'code' field to indicate the specific error status or code.
    - Use standard HTTP status codes whenever possible to convey the nature of the error.

<br>

3.  Provide a Clear Error Message:

    - Include an informative and human-readable error message the describes the error concisely.
    - The error message should provide enough detail to assist clients in understanding the nature of the error.

<br>

4.  Include Error Details:

    - Provide additional details about the error in the error object, such as error codes, timestamps, request IDs, or any other relevant information.
    - Include relevant contextual information that can help with troubleshooting or identifying the cause of the error.

<br>

5.  Handle Multiple Errors:

    - If multiple errors occur within a request, return an array of error objects to capture and communicate each error separately.
    - Each error object should follow the same structure as described above.

            {
                "status": 404,
                "error": {
                    "code": "RESOURCE_NOT_FOUND",
                    "message": "The requested resource was not found",
                    "details": {
                        "resourceId": "123"
                    }
                }
            }

<br>
<br>

##### Exception handling and error logging

1.  Use Structured Exception Handling:

    - Implement a structured exception handling mechanism in your API codebase to catch and handle exceptions gracefully.
    - Use try-catch blocks to capture exceptions and handle them appropriately based on the specific error scenario.
    - Differentiate between expected exceptions (e.g., validation errors) and unexpected exceptions (e.g., server errors) and handle them differently.

<br>

2.  Return Consistent Error REsponses:

    - When an exception occurs, return consistent and standardized error responses to clients.
    - Structure the error responses as discussed earlier, including the appropriate HTTP status code, error message, and any relevant details.
    - Ensure that error responses align with the API design and follow a consistent format across all endpoints.

<br>

3.  Log Errors:

    - Implement a robust logging mechanism to capture and log errors that occur during API execution.
    - Log relevant details such as the error message, stack trace, request details (URL method, headers), and any additional contextual information.
    - Consider logging the severity level of the error to differentiate between informational, warming, and critical errors.

<br>

4.  Include Error Codes:

    - Assign unique error codes to different types fo errors encountered in your API.
    - Use these error codes consistently in error responses and log entries to identify specific error scenarios.
    - Maintain a centralized error code reference for easy reference and understanding.

<br>

5.  Mask Sensitive Information:

    - Be cautious when logging or returning error responses to avoid exposing sensitive information.
    - Ensure that any sensitive data (e.g., password, authentication tokens) is not logged or included in error responses.
    - Implement proper masking or obfuscation techniques to protect sensitive information.

<br>

6.  Monitor Error Logs:

    - Regularly monitor error logs to identify recurring errors, patterns, or performance issues.
    - Set up alerts or notifications to be notified of critical errors or unusual error rates.
    - Analyze error logs to identify areas for improvement and optimize the API's performance and reliability.

<br>
<br>

<a id="2"></a>

## HATEOAS (Hypermedia as the Engine of Application State)

HATEOAS (Hypermedia as the Engine of Application State) is a principle of RESTful API design that promotes self-descriptive and discoverable APIs. It allows clients to navigate and interact with a RESTful API by following hypermedia links embedded in the responses. Here's a breakdown of the concept of HATEOAS:

1.  Hypermedia Links:

    - In a HATEOAS-compliant API include hypermedia links that provide navigation and interaction options for clients.
    - Hypermedia links are typically represented using standardized formats like Hypermedia Application Language (HAL), JSON-LD, or Atom.

<br>

2.  Self-Descriptive API:

    - A HATEOAS-compliant API includes metadata and links within its responses, providing information on available actions and possible next steps.
    - Clients can discover and understand tha available resources, actions, and transitions by examining the hypermedia links and associated metadata.

<br>

3.  Discoverability:

    - HATEOAS promotes discoverability by allowing clients to navigate through the API by following links provided in the responses.
    - Clients do not need to rely on prior knowledge or hard-coded endpoints; they can dynamically explore and interact with the API based on the available hypermedia links.

<br>

4.  Stateless Interaction:

    - HATEOAS enables stateless interaction between the client and server.
    - Clients do not need to maintain their own state or rely on server-side session management; they use the hypermedia links to determine the next possible actions.

<br>

5.  Loose Coupling:

    - HATEOAS promotes loose coupling between the client and server.
    - Clients only need to understand the semantics of the link relations and how to interpret the hypermedia formats, allowing for flexibility and extensibility of the API.

<br>

6.  API Evolution:

    - HATEOAS provides flexibility for API evolution and versioning.
    - As long as the link relations and semantics are maintained, the server can introduce new resources or actions without breaking the existing clients.

            {
               "id": 123,
               "title": "Sample Blog Post",
               "content": "Lorem ipsum dolor",
               "author": {
                "id": 456,
                "name": "John Doe"
               },
               "links": [
                {
                    "rel": "self",
                    "href": "/posts/123"
                },
                {
                    "rel": "author",
                    "href": "/authors/456"
                },
                {
                    "rel": "comments",
                    "href": "/authors/123/comments"
                },
                {
                    "rel": "edit",
                    "href": "/authors/123/edit",
                    "method": "PUT"
                },
                {
                    "rel": "delete",
                    "href": "/authors/123/delete",
                    "method": "DELETE"
                },
               ],
               "pagination": {
                "page": 2,
                "limit": 10,
                "total": 5,
                "nextPage": "/post/123?page=3&limit=10",
                "prevPage": "/post/123?page=1&limit=10"
               }
            }

<br><br>

<a id="3"></a>

## Documentation and API Standards

API Versioning:

1.  URL-Based Versioning:

    - Include the version number in the URL path, such as <code>/v1/resource</code>.
    - Ths approach allows for clear separation of different API versions and makes it explicit in the API endpoint.

<br>

2.  Header-Based Versioning:

    - Use a custom request header (e.g., <code>X-API-Version</code>) to indicate the desired API version.
    - This approach allows clients to specify the version independently of the URL structure.

<br>

3.  Content Negotiation:

    - Utilize content negotiation using the <code>Accept</code> header to specify the desired API version.
    - The server can respond with the appropriate version based on the client's requested media type.

<br>

4.  Semantic Versioning:

    - Follow semantic versioning (e.g., <code>Major.Minor.Patch</code>) to indicate the significance of changes.
    - Increment the major version for backward-incompatible changes, minor version for backward-compatible additions, and patch version for backward-compatible bug fixes.

<br>

API Deprecation:

1.  Communicate Deprecation:

    - Clearly communicate the deprecation of API features to clients through documentation, release notes, and changelogs.
    - Provide advance notice to clients to allow them to plan for the changes.

<br>

2.  Deprecation Timeline:

    - Define a timeline for deprecation, specifying when the deprecated features will be removed.
    - Consider providing a grace period during which the deprecated features will continue to function before their eventual removal.

<br>

3.  Deprecation Notices:

    - Include deprecation notices in API responses or headers to alert clients about the usage of deprecated features.
    - Provide guidance and alternative solutions to migrate away from the deprecated features.

<br>

4.  Versioning and Deprecation Policy:

    - Establish a clear versioning and deprecation policy that outlines the support and lifespan of each API version.
    - Define tha duration of support for each version and how long deprecated versions will be maintained.

<br>

5.  API Sunset and Removal:

    - Clearly communicate the date of API sunset and removal of deprecated versions.
    - Provide migration guides and assistance to help clients transition to the newer API versions.

<br><br>

<a id="4"></a>

## Best Practices and Design Patterns

Best Practices -

1.  Use Descriptive and Meaningful URIs:

    - Design URIs to be descriptive and reflect the resources they represent.
    - Use nouns instead of verbs in URI paths.
    - Avoid including implementation details in URIs.

<br>

2.  Follow RESTful Naming Conventions:

    - Use plural nouns to represent collections (e.g., <code>/users</code>).
    - Use singular nouns to represent individual resources (e.g., <code>/users/{id}</code>).
    - Use nested resources to represent hierarchical relationships (e.g., <code>/users/{id}/orders</code>)

<br>

3.  Use HTTP Verbs Appropriately:

    - Use HTTP GET for retrieving resources.
    - Use HTTP POST for creating new resources.
    - Use HTTP PUT or PATCH for updating resources.
    - Use HTTP DELETE for deleting resources.

<br>

4.  Provide Resource Relationships:

    - Represent relationships between resources using hypermedia links.
    - Include related resources as embedded objects or provide links to retrieve them.

<br>

5.  Use Proper HTTP Status Codes:

    - Return appropriate HTTP status codes to indicate the outcome of API requests.
    - Use status codes such as 200 OK, 201 Crated, 204 No Content, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error, etc.

<br>

6.  IMplement Pagination:

    - If a collection of resources is potentially large, implement pagination to return results in manageable chunks.
    - Use query parameters to specify the page size, current page, and other pagination parameters.

<br>

7.  Support Filtering, Sorting and Searching:

    - Allow clients to filer resources based on specific criteria.
    - Support sorting resources based on specific fields and in ascending or descending order.

<br>

8.  Implement Caching:

    - Utilize HTTP caching mechanisms to improve API performance and reduce server load.
    - Set appropriate caching headers such as ETag and Last-Modified.

<br>

9.  Implement Security:

    - Use secure communication (HTTPS) to protect sensitive data.
    - Implement authentication and authorization mechanisms to control access to resources.
    - Consider using industry-standard security protocols like OAuth2 for authentication and authorization.

<br>

10. Handle Errors Appropriately:

    - Return informative and standardized error responses when errors occur.
    - Include error codes, error messages, and additional details to assist clients in troubleshooting.
    - Use appropriate HTTP status codes for different types of errors.

<br>

11. Versioning and Deprecation:

    - Implement a versioning strategy to manage API changes and maintain backward compatibility.
    - Clearly communicate deprecation timelines and provide migration guidance for deprecated features.

<br>

12. Documentation and Examples:

    - Provide comprehensive and up-to-date API documentation.
    - Include clear usage instructions, endpoint descriptions, request/response examples, and error handling guidelines.
    - Consider using tools like Swagger/OpenAPI fo generating interactive and consistent documentation.

<br><br>

Design Patterns -

1.  Singleton Resource:

    - Use a singular noun in the URI to represent a resource that should have only one instance.
    - Example: <code>/user/profile</code>

<br>

2.  Collection Resource:

    - Use a plural noun in the URI to represent a collection of resources.
    - Example: <code>/users</code>

<br>

3.  Composite Resource:

    - Use nested URIs to represent hierarchical relationships between resources.
    - Example: <code>/users/{userId}/orders</code>

<br>

4.  Filter Resource:

    - User query parameters to filter resources based on specific criteria.
    - Example: <code>/users?status=active</code>

<br>

5.  Sort Resource:

    - Use query parameters to specify sorting criteria for resource collections.
    - Example: <code>/users?sort=name&order=10</code>

<br>

6.  Pagination Resource:

    - Use query parameters to implement pagination for large resource collections.
    - Example: <code>/users?page=1&size=10</code>

<br>

7.  Partial Update:

    - Use PATCH method to perform partial updates on resources.
    - Send only the fields that need to be updated instead of the entire resource representation.

<br>

8.  ETag:

    - Use ETag header to enable caching and optimistic concurrency control.
    - Clients can send the ETag value in subsequent requests to check if the resource has changed.

<br>

9.  HATEOAS (Hypermedia as the Engine of Application State):

    - Include hypermedia links in responses to provide navigation and discoverability of API resources.
    - Clients can follow these links to interact with related resources.

<br>

10. Bulk Operations:


    - Support bulk operations on resources by allowing clients to send multiple requests in a single API call.
    - Use appropriate HTTP methods and payload structures to perform batch operations.

<br>

11. Rate Limiting:


    - Implement rate limiting mechanisms to control and manage the number of requests from clients.
    - Use headers like X-RateLimit, X-RateLimit-Remaining, and X-RateLimit-Reset to communicate rate limits to clients.

<br>

12. Webhooks:


    - Provide support for webhooks to allow clients to receive real-time notifications or event-based callbacks.
    - Clients can register webhook URLs to receive updates or notifications from the API.
