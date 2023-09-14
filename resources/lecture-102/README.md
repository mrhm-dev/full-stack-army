# Lecture 102 - API Design Methods, Errors and Response Structures

## REST API Design

### Outline

1. [<b>HTTP Methods and CRUD Operations</b>](#1)
   <ol type="I">
   <li>Mapping HTTP methods to CRUD operations</li>
   <li>Best practices or each HTTP method (GET, POST, PUT, PATCH, DELETE)</li>
   <li>Handling query parameters and filtering</li>
   <li>Pagination and result limiting</li>
   </ol>
   <br>

2. [<b>Request and Response Payloads</b>](#2)
   <ol type="a">
   <li>Structuring request payloads (POST AND PUT)</li>
   <li>Handling request validation and error handling</li>
   <li>Common response formats and status codes</li>
   <li>Content negotiation (Accept and Content-Type headers)</li>
   </ol>
   <br>

<a id="1"></a>

## HTTP Methods and CRUD Operations

<p>Best practices for each HTTP method (GET, POST, PUT, PATCH & DELETE)</p>

#### GET Method:

- Use GET to retrieve a representation of a resource or a collection of resources.
- Use query parameters for filtering, sorting, and pagination.
- Avoid making modifications to the state of the server or the resources with a GET request.
- Ensure idempotence: Multiple identical GET requests should produce the same result.
  <br>
  In the context of the GET method, it implies that sending identical GET requests to retrieve a resource or a collection of resources should consistently return the same response. The server should not modify the state of the resources or have any side effects as a result of the GET request.
  <br>
  Here's why this property is important:
  - It allows clients to safely retry GET requests without worrying about unintended consequences or modifications to the resources.
  - It enables caching mechanisms to work effectively. Caches can store an serve the response of aGET request, knowing that subsequent identical requests will yield the same result.
  - It aligns with the principles of idempotence in HTTP, promoting predictability and reliability in client-server interactions.
- Use appropriate caching mechanisms to improve performance for frequently accessed resources.

<br>

#### POST Method:

- Use POST to create a new resource or submit data to be processed.
- Include the request payload containing the data for creating the resource.
- Respond with a 201 (Created) status code and include the URI of the newly created resource in the response headers.
- Avoid including sensitive information in the response body, as it may be cached or stored.
- Consider implementing input validation and sanitization to ensure data integrity.

<br>

#### PUT Method:

- Use PUT to update or replace an existing resource with a new representation.
- Include the complete representation of the resource in the request payload.
- Respond with a 200 (OK) status code or 204 (No Content) if the resource was successfully updated.
- If a resource with the given identifier does not exist, consider creating a new resource with a POST request instead.
- https://restfulapi.net/rest-put-vs-post/
- https://www.restapitutorial.com/lessons/httpmethods.html

<br>

#### PATCH Method:

- Use PATCH to perform partial updates to an existing resource.
- Include only the fields that need to be updated in the request payload, rather than sending the entire resource representation.
- Use a well-defined and consistent patch format, such as <b>JSON Patch</b> or <b>JSON Merge Patch</b>.
- Clearly document and communicate the supported patch formats and operations in your API documentation.
- Provide meaningful error responses if the patch request is invalid or cannot be applied.
- Consider implementing optimistic concurrency control mechanisms, such as ETags, to prevent conflicting updates.
  Respond with a 200 (OK) status code and include the updated resource representation in the response body.
- Consider supporting atomic updates by allowing multiple patch operations within a single PATCH request.
- Ensure idempotence: Applying the same patch multiple times should result in the same outcome.

<br>

#### DELETE Method:

- Use DELETE to remove a resource from the server.
- Use caution, as this operation permanently deletes the resource.
- Respond with a 200 (OK) ro 204 (No Content) status code to indicate a successful deletion.
- Consider implementing additional authorization or access control mechanisms to ensure only authorized clients can delete resources.
- Use appropriate error handling to handle cases where the resource to be deleted does not exist.

<br>

#### General Best Practices for HTTP Methods:

- Follow the principles of REST and adhere to the semantics and conventions of each HTTP method.
- Use appropriate status codes to indicate the outcome of the request.
- Provide meaningful error responses with relevant error codes and messages.
- Implement proper authentication and authorization mechanisms to secure sensitive operations and resources.
- Use versioning strategies to handle backward compatibility and API evolution.
- Follow established naming conventions and URl structures to improve API consistency and usability.
- Use PATCH when the client wants to modify specific attributes or properties of a resource without sending the complete representation.
- Clearly define the semantics and behavior of the PATCH method in your API documentation.
- Validate and sanitize the patch payload to ensure data integrity and security.
- Consider logging or auditing patch operations for tracking changes to resources.
- Follow established conventions and patterns for patch formats, such as RFC 6902 (JSON Patch) or RFC 7396 (JSON Merge Patch).
- Provide through and clear documentation on how to construct valid patch requests for your resources.

<br>

#### Patch Methods:

1.  JSON Patch: JSON Patch format is used to describe changes to be applied to a JSON document.<br>

    Example JSON document:

           {
            "name": "John Doe",
            "age": 30,
            "address": {
              "street": "123 Main St",
              "city": "New York"
            }
           }

    <br>

    Example JSON Patch:

          [
            {"op": "replace", "path": "/name", "value": "Jane Smith"},
            {"op": "add", "path": "/gender", "value": "female"},
            {"op": "remove", "path": "/address/city"},
            {"op": "move", "from": "/sourcePath", "path": "/destinationPath"},
            {"op": "copy", "from": "/sourcePath", "path": "/destinationPath"}
          ]

      <br>

    Explanation of JSON Patch operations:

    - <code>replace</code> : Replaces the value of the <code>/name</code> field with <code>"Jane Smith"</code>.
    - <code>add</code> : Adds a new field <code>/gender</code> with the value <code>"female"</code>.
    - <code>remove</code> : Removes the <code>/address/city</code> field from the document.

    <br>

    Applying the JSON Patch to the JSON document would result in:

        {
          "name": "Jane Smith" ,
          "age": 30,
          "gender": "female",
          "address": {
            "street": "123 main St"
          }
        }

    <br>

2.  JSON Merge Patch: JSON Merge Patch is a format used to update a JSON document by merging it with another JSON document.<br>

    Example JSON document:

        {
          "name": "John Doe",
          "age": 30,
          "address": {
            "street": "123 Main St",
            "city": "New York",
          }
        }

    Example JSON Merge Patch:

        {
          "name": "Jane Smith",
          "address": {
            "city": "Los Angeles"
          },
          "phoneNumber": "+1234567890"
        }

    Explanation of JSON Merge Patch:

    - The <code>"name"</code> field will be updated with <code>"Jane Smith"</code>.
    - The <code>"address"</code> field will be merged, replacing the <code>"city"</code> field with <code>"Los Angeles"</code>.
    - The <code>"phoneNumber"</code> field will be added to the document.

    Merging the JSON Merge Patch with the JSON document would result in:

        {
          "name": "Jane Smith",
          "age": 30,
          "address": {
            "street": "123 Main St",
            "city": "Los Angeles"
          },
          "phoneNumber": "+1234567890"
        }

<br>

#### Pros & Cons of Both Approach

#### JSON Patch Pros:

1.  Granular Updates: JSON Patch allows for fine-grained control over updates by specifying individual operations (add, remove, replace) at specific paths in the JSON document.
2.  Idempotence: JSON Patch operations are idempotent, meaning that applying the same patch multiple times will yield the same result.
3.  Efficiency: JSON Patch is typically more efficient in terms fo network payload and processing, as it only sends the necessary changes instead of the entire representation of the resource.

#### JSON Patch Cons:

1.  Complexity: JSON Patch syntax can be more complex and verbose, requiring careful construction and handling of patch operations.
2.  Limited Updates: JSON Patch can only perform specific operations (add, remove, replace), which may not cover all update scenarios. Some more complex updates may require multiple patch operations.

<br>

#### JSON Merge Patch Pros:

1.  Simplicity: JSON Merge Patch is simpler in terms fo syntax ad usage compared to JSON Patch. It allows for straightforward merging of the provided patch into the existing JSON document.
2.  Flexibility: JSON Merge Patch enables updates at various levels of the JSON document, allowing for partial updates or complete replacement.
3.  Robustness: JSON Patch handles mission fields more gracefully by retaining existing values, making it suitable for cases where partial updates or optional fields are common.

#### JSON Merge Patch Cons:

1.  Lack of Granularity: JSON Merge Patch operates at the document level, making it less suitable for fine-grained updates. It replaces entire values or objects, potentially overwriting existing fields.
2.  Limited Control: JSON Merge Patch does not provide explicit control over individual operations like add or remove. It relies on merging the provided patch with the existing document, which may not suit al use cases.
3.  Complexity with Arrays: JSON Merge Patch can be more complex when dealing with arrays, as it replaces entire arrays instead of allowing precise modifications at specific indices.

<br>

#### Handling query parameters

    GET /product?category=electronics&brand=samsung&priceMin=500&priceMax=1000&sort=price&order=asc&page=2&limit=10

In this example:

- The base URI is <code>/product</code>, representing the collection of products.
- The query parameters are used to filter the products based on certain criteria, similar to the previous example.
- The <code>sort=price</code> parameter indicates that the products should be sorted based on their price.
- The <code>order=asc</code> parameter specifies that the sorting should be in ascending order. You can use <code>desc</code> for descending order.
- The <code>page=2</code> parameter indicates that the results should be paginated, and the response should include the products form the second page.
- The <code>limit=10</code> parameter specifies that each page should contain a maximum of 10 products.

<br>

<a id="2"></a>

## Request and REsponse Payloads

#### Structuring request payloads (POST and PUT)

1.  Identify the Required Fields:

    - Determine the essential fields that must be included in the request payload to fulfill the requirements of the POST or PUT operation.
    - Consider the mandatory fields based on business logic and data integrity constraints.

<br>

2.  Use a Clear and Consistent JSON Structure:

    - Create JSON object that represents the request payload.
    - Use clear and meaningful field names that accurately describe the data being sent.
    - Maintain a consistent structure across different API endpoints for ease of use.
      <br>
      Example:
      <br>

          {
            "name": "John Doe",
            "age": 30,
            "email": "johndoe@example.com"
          }

<br>

3.  Include Relevant Nested Structures:

    - If the resource has nested or complex structures, represent them appropriately in the request payload.
    - Use objects ro arrays to encapsulate nested data.
      <br>
      Example:
      <br>

          {
            "name": "Product ABC",
            "price": 9.99,
            "category": {
              "id": 1,
              "name": "Electronics"
            }
          }

<br>

4.  Validate and Sanitize Input Data:

    - Implement server-side validation to ensure the integrity and validity of the request payload data.
    - Validate required fields, data types, formats, and any other specific validation rules.
    - Sanitize input data to prevent security vulnerabilities like SQL injection ro cross-site scripting (XSS) attacks.

<br>

5.  Consider Supporting Partial Updates (PATCH):

    - If applicable, support PATCH requests to enable partial updates.
    - Allow clients to send only the modified fields in the request payload, reducing unnecessary data transfer.
      <br>
      Example PATCH request payload:
      <br>

          [
            {"op": "replace", "path": "/name", "value": "New Name"}
          ]

<br>

6.  Document the Request Payload Structure:

    - Provide clear documentation describing the structure and expected format of the request payload for each API endpoint.
    - Include examples and specify any validation rules or constraints.
      <br>
      Example API documentation:
      <br>

            POST /users

            Request Payload:
            {
              "name": "string",
              "age": "integer",
              "email": "string"
            }

<br>

#### Structuring Response Object

1.  Use Consistent Data Format:

    - Choose a widely supported and well-defined data format, such as JSON or XML, for your response object.
    - JSON (JavaScript Object Notation) is the most commonly used format due to its simplicity, readability, and widespread adoption.

<br>

2.  Include Metadata:

    - Include metadata in the response object to provide additional information about the response, such as pagination details, request status, or error messages.
    - Metadata can be included as separate fields in the response object or as response headers.

<br>

3.  Follow a Clear and Logical Structure:

    - Organize the response object in a clear and logical structure that reflects the resource being returned.
    - Use meaningful field names that accurately describe the data being returned.
    - Consider using nested objects ro arrays for representing complex or hierarchical data structures.

<br>

4.  Minimize Data Redundancy:

    - Only include tha necessary data in the response object to avoid redundancy and optimize network bandwidth usage.
    - Exclude sensitive or unnecessary information that is not requited by the client.

<br>

5.  Handle Errors Appropriately:

    - Define a consistent error response structure for reporting errors or exceptions.
    - Include relevant error codes, error messages, and any additional information that helps clients understand and resolve the issue.

<br>

6.  Provide HATEOAS Links (optional):

    - Consider following HATEOAS principles (Hypermedia as the Engine of Application State) to include links in the response object that allow clients to navigate and discover related resources or actions.

<br>

7.  Format Dates and Times:

    - Use a consistent date and time format, such as ISO 8601 (e.g., <code>"2022-05-31T15:30:00Z""</code>), for representing timestamps in the response object.

<br>

8.  Document the Response Format:

    - Clearly document the structure and contents fo the response object in your API documentation.
    - Provide examples and explanations to help clients understand and consume the response data effectively.

          {
            "status": 200,
            "message": "Success",
            "data": {
              "id": 123,
              "name": "John Doe",
              "email": "johndoe@example.com",
              "createdAt": "2022-5-20T12:00:00Z",
              "updatedAT" "2022-05-21T10:30:00Z",
              "links": [
                {
                  "rel": "self",
                  "href": "https://api.example.com/users/123"
                },
                {
                  "rel": "orders",
                  "href": "https://api.example.com/users/123/orders"
                },
              ]
            }
          }

        <br>

          {
            "status": 200,
            "message": "Success",
            "data": {
              "users": [
                {
                  "id": 1,
                  "name": "John Doe",
                  "email": "johndoe@example.com",
                  "createdAt": "2022-05-20T12:00:00Z",
                  "address": {
                    "street": "123 Main St",
                    "city": "New York",
                    "country": "USA"
                  },
                  "orders": [
                    {
                      "id": 123,
                      "orderNumber": "ORD-123",
                      "total": 50.99
                    },
                    {
                      "id": 456,
                      "orderNumber": "ORD-456",
                      "total": 75.49
                    }
                  ],
                  "links": {
                    "self": "https://api.example.com/users/1",
                    "orders": "https://api.example.com/users/1/orders"
                  }
                },
                {
                  "id": 2,
                  "name": "Jane Smith",
                  "email": "johndoe@example.com",
                  "createdAt": "2022-05-21T09:00:00Z",
                  "address": {
                    "street": "456 Elm St",
                    "city": "San Francisco",
                    "country": "USA"
                  },
                  "orders": [
                    {
                      "id": 789,
                      "orderNumber": "ORD-789",
                      "total": 100
                    }
                  ],
                  "links": {
                    "self": "https://api.example.com/users/2",
                    "orders": "https://api.example.com/users/2/orders"
                  }
                },
              ],
              "pagination": {
                "currentPage": 1,
                "perPage": 2,
                "totalPages": 2,
                "totalCount": 3,
                "links": {
                  "self": "https://api.example.com/users?page=1",
                  "next": "https://api.example.com/users?page=2"
                }
              }
            }
          }

<br>

#### Structuring Validation Error Messages:

1.  Use a Descriptive HTTP Status Code:

    - Choose an appropriate HTTP status code to indicate a validation error, such as 400 (Bad Request) or 422 (Unprocessable Entity).
    - Use 400 for generic validation errors or 422 when the request is semantically incorrect.

<br>

2.  Provide a Clear and Consistent Response Message:

    - Include a concise and meaningful message in the response to indicate that a validation error has occurred.
    - Use a consistent message, such as "Validation Error" or "Invalid Request", across your API.

<br>

3.  Structure the Error Array:

    - Create an array called "errors" to hold individual error objects.
    - Each error object should contain the field name and the corresponding error message.
    - Include all relevant validation errors in the "errors" array.

<br>

4.  Include Field and Message Information:

    - Use the "field" attribute to indicate the specific field or parameter that failed validation.
    - Provide a clear and descriptive "message" explaining the validation failure.
    - Ensure the "field" and "message" attributes are consistently named across all error objects.

<br>

5.  Return the Validation Error Response:

    - St the appropriate HTTP status code for the response.
    - Format the response object with the "status", "message", and "errors" attributes.
    - Send the response as JSON or in the preferred data format for your API.

          {
            "status": 400,
            "message": "Validation Error",
            "errors": [
              {
               "field": "name",
               "message": "Name is required."
              },
              {
                "field": "email",
                "message": "Email must be a valid email address."
              }
            ]
          }

<br>

#### Structuring an Error Message

1.  Use an Appropriate HTTP Status Code:

    - Choose an HTTP status code that accurately represents the nature of the error.
    - Select from the standard HTTP status codes (4xx for client errors, 5xx for errors) or use custom error codes if necessary.

<br>

2.  Include an Error Message:

    - Provide a descriptive error message that explains the nature of the error in a concise and clear manner.
    - Make sure the error message is human-readable and helps the client understand the issue.

<br>

3.  Include Error Details:

    - Optionally, include additional details about the error in the response.
    - Include specific error codes, timestamps, request IDs, or any other relevant information that can aid in troubleshooting.

<br>

4.  Follow a Consistent Response Structure:

    - Maintain a consistent structure for error responses across your API.
    - Use consistent field names ans structure to make it easier for clients to handle and process error responses.

<br>

5.  Provide Guidance or Next Steps:

    - Include any guidance or next steps that the client can take to resolve the error.
    - Suggestions for corrective actions ro links to relevant documentation can be included if appropriate.

          {
            "status": 404,
            "message": "Resource Not Found",
            "error":{
              "code": "RESOURCE_NOT_FOUND",
              "description": "The requested resource was not found."
            },
            "guidance": "Please verify the resource identifier and try again."
          }

<br>

#### Content Negotiations

Content negotiation is the process by which a client and a server communicate to determine the most suitable representation of a resource to be exchanged. The "Accept" and "Content-Type" headers play a crucial role in content negotiation.

1.  Accept Header:

    - The client includes the "Accept" header in the equest to indicate the preferred media types (content types) it can understand.
    - The server examines the "Accept" header and determines the most appropriate representation to send back to the client based on its capabilities.
      <br>
      Example:
      <br>

          GET /api/products HTTP/1.1
          Host: example.com
          Accept: application/json, text/html

          using desktop
          --------------
          https://example.com/api/products
          Accept: text/html

          using mobile
          --------------
          https://example.com/api/products
          Accept: application/json

<br>

2.  Content-Type Header:

    - The client includes the "Content-Type" header in the request to specify the media type (content type) of the payload it is sending to the server.
    - The server examines the "Content-Type" header to understand the format of the data being transmitted.
      <br>
      Example:
      <br>

            POST /api/products HTTP/1.1
            Host: example.com
            Content-Type: application/json
            Content-Length: 43

            { "name": "Product A", "price": 10.99 }

      In this example, the client specifies that the payload being sent is in JSON format using the 'Content-Type" header.

<br>

Content negotiation helps ensure interoperability between clients and servers by allowing them to communicate and agree on the appropriate representation of a resource. The "Accept" header allows the client to express its preferred media types, and the "content-Type" header allows the client to specify the format of the payload being sent.
<br>
Servers should examine these headers and respond with the appropriate representation or process the incoming payload based on the specified content type. By using content negotiation, clients and servers can handle different data formats, such as JSON, XML, or HTML, based on their capabilities and preferences.
