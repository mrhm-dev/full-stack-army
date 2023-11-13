# Lecture 103 - API Authentication Methods

## REST API Design

### Outline

1. [<b>Authentication and Authorization</b>](#1)
   <ol type="a">
   <li>Different types of authentication mechanisms (e.g., API keys, OAuth)</li>
   <li>Securing REST APIs with authentication tokens</li>
   <li>Role-based access control (RBAC)</li>
   <li>Handling authorization errors and access control</li>
   </ol>
   <br>

<a id="1"></a>

## Authentication and Authorization

Authentication is the process of verifying the identity of a client or user accessing the API. It ensures that the client is who they claim to be.
<br><br>
Possible solutions for authentication include:

- Token-based authentication: Clients obtain a token (such as JSON Web Tokens - JWT) after successful authentication and include it in subsequent requests.
- Session-Cookies-based authentication: clients provide credentials (username/password) and receive a session identifier that is stored on the server.
- API Key based authentication: Clients provide x-api-key in the header or as a query params.
- OAuth 2.0: A protocol that allows clients to obtain access tokens from an authorization server, typically use3d for third-party authentication.

<br>

#### Token Based Authentication:

Token-based authentication is a popular approach to authenticate clients in a distributed system, including RESTful APIs. It involves the use fo tokens (such as JSON Web Tokens - JWTs) to verify the identity of a client and grant access to protected resources. Here's a breakdown of token-based authentication and different techniques:

1. JSON Web Tokens (JWT): <https://jwt.io/introduction>

   - JWT is an open standard for representing claims securely between parties.
   - It consists of three parts: a header, a payload, and a signature.
   - The header typically contains information about the algorithm used for signing the token.
   - The payload contains claims or attributes about the user, such as their ID, role, or expiration time.
   - The signature ensures the integrity and authenticity of the token.

<br>

2. Token-based Authentication Flow:

   - The client provides valid credentials (e.g., username and password) to the authentication server.
   - The authentication server verifies the credentials and issues a token (JWT) to the client.
   - The client stores the token (e.g., in local storage or a cookie) and includes it in the headers of subsequent requests.
   - The server validates the token on each request to ensure its authenticity and integrity.
   - It the token is valid and not expired, the server grants access to the requested resource.

<br>

3.  Stateless Authentication:

    - In token-based authentication, the server does not store session state for each client.
    - This allows the server to be stateless and eliminates the need for session management.
    - The server can validate the token independently without relying on any session information.

<br>

4.  Refresh Tokens:

    - To handle longer-lived sessions and improve security, refresh tokens can be used.
    - After authentication, the server can issue an additional token called a refresh token alongside the access token.
    - The refresh token is use to obtain a new access token when the current one expires, without requiring the user to provide credentials again.
    - The server validates the refresh token and issues a new access token if it is valid.

<br>

5.  Token Revocation and EXpiration:

    - Tokens can have an expiration time, after which they are not longer valid.
    - Tokens can also be revoked by the server, for example, if a user logs out or if the token is compromised.
    - Revocation ca be implemented by maintaining a blacklist or using token introspection mechanisms.

<br>

6.  Token Encryption and Signature:

    - Tokens can be signed and /or encrypted to ensure their integrity and confidentiality.
      Signing the token using a secret key or a private key ensures that the token has not been tampered with.
    - Encryption can be applied to the token payload to protect sensitive information.

<br>

Token-based authentication provides a scalable and secure approach for authentication clients in distributed systems. It offers flexibility, statelessness, and decoupling or the authentication server from the application server. Implementing token-abased authentication with JWTs can simplify authentication and authorization processes in RESTful APIs.

<br>

#### Session Based Authentication

Session-based authentication is a traditional approach to authenticate clients in web applications. It involves the use of sessions to maintain the state of a user's authentication across multiple requests. Hee's a breakdown of session-based authentication and different techniques:

1.  Session Management:

    - When a user authenticates, the server creates a session for the user and assign a unique session identifier.
    - The session identifier is typically stored in a cookie or sent as aresponse header to the client.
    - The server associates the session identifier with the user's authenticated state and relevant session data.

<br>

2.  Cookies:

    - Sessions are often implemented using HTTP cookies, which are small pieces of data stored on the client
      s browser.
    - A session cookie contains the session identifier that the server uses to identify and retrieve the associated session data.
    - The cookie is sent automatically by the client with each subsequent request to the server.

<br>

3.  Server-side Session Storage:

    - Session data is stored on the server, either in memory or a persistent storage mechanism like a database.
    - The server can retrieve session data based on the session identifier sent by the client.
    - The session data typically includes user information, such as user ID, role, or any other relevant details.

<br>

4.  Session Expiration and Invalidation:

    - Sessions have an expiration time to ensure that users are periodically re-authenticated.
    - Once a session expires, the user needs to re-authenticate to establish a new session.
    - Session can also be manually invalidated, such as when a user logs out or when their privileges change.

<br>

5.  Session Tokens:

    - Instead of storing the entire session data on the server, a session token can be used.
    - The session token is a random string associated with the session data stored on the server.
    - The token is sent to the client and used as an identifier for the session.
    - The server retrieves the session data based on the token and validates its authenticity.

<br>

6.  Session Clustering and Persistence:

    - In a distributed or clustered server environment, session data needs to be shared across multiple servers.
    - Techniques such as session clustering or session persistence ensure that session data is accessible across server instances.

Session-based authentication is commonly used in web applications and provides a mechanism to maintain user sessions and manage user authentication state. It relies on server-side storage and cookies to establish and maintain sessions. However, session-based authentication requires the server to maintain session state, which can introduce scalability and performance challenges in large-scale distributed systems. Token-based authentication, on the other hand, provides a stateless alternative and is often preferred for RESTful APIs.

<br>

#### Token vs Session Based Authentication

Token-Based Authentication Pros:

1.  Stateless: Token are self-contained and do not require the serve to store session state. This simplifies server-side management and allows for easy scalability.
2.  Scalability: Token-based authentication is highly scalable since the server does not need to track and manage sessions for each client.
3.  Cross-Domain: Tokens can be easily used for authentication across different domain or services.
4.  Mobile-Friendly: Tokens are well-suited for mobile applications and APIs because they can be stored on the client side (e.g., in local storage or mobile app storage).
5.  Fine-Grained Control: Tokens can carry additional information (claims) about the user, such as roles or permissions, allowing for fine-grained access control.

<br>

Token-Based Authentication Cons:

1.  token Management: Tokens need to be securely managed and protected against theft or misuse.
2.  Token Lifetime: Tokens have a lifetime, and managing token expiration and refresh can add complexity to the authentication flow.
3.  Increased Payload Size: Tokens may add additional overhead to each request since they need to be sent with each authenticated request.

<br>

Session-Based Authentication Pros:

1.  Simplicity: Session-based authentication is relatively simple to implement, especially with server-side session management tolls or frameworks.
2.  Granular Control: Sessions allow for fine-grained control over session expiration, session invalidation, and managing session data on the server-side.
3.  Standard Approach: Session-based authentication has been a widely adopted and understood authentication mechanism in web applications for many years.

<br>

Session-Based Authentication Cons:

1.  Server-Side State: Sessions require the server to maintain session state, which can introduce scalability and performance challenges in distributed systems or under high load.
2.  Server Overhead: Server-side session management can increase server resource usage, especially when dealing with a large number of concurrent sessions.
3.  Cross-Domain Limitations: Sessions are often tied to a specific domain or server, making it challenging to share authentication state across multiple domains or services.
4.  Mobile Compatibility: Sessions can be less convenient for mobile applications, as managing session cookies and cross-domain issues can be more complex.

<br>

#### API Key Based Authentication

API Key-based authentication is a simple and commonly used method to authenticate clients in APIs. It involves using a unique API Key (also known as an API token or API secret) that is associated with a client or application. Here's a breakdown of API Key-based authentication and different techniques:

1.  API Key Generation:

    - The server generates an API Key (a long, randomly generated string) for each client or application that needs to access the API.
    - The API Key is unique to the client and acts as a credential to authenticate requests.

<br>

2.  Inclusion of API Key:

    - The Client includes the API Key in the request to the server. This can be done in various ways:
      - Query Parameter: The API Key is included as a query parameter in the URL.
      - Request Header: The API Key is included as a custom header in the request.
      - Authorization Header: The API Key is included in the "Authorization" header using a specified scheme (e.ge., "Bearer").

<br>

3.  Verification of API Key:

    - The server verifies the API Key to authenticate the client.
    - It compares the provided API Key with the valid API Keys stored on the server or in a database.
    - If the API Key is valid, the server grants access to the requested resource.

<br>

4.  API Key Rotation and EXpiration:

    - API Key can have an expiration time, after which they become invalid and require renewal or regeneration.
    - Regularly rotating API Keys enhances security by minimizing the impact of compromised keys.

<br>

5.  Scope and Permissions:

    - API Keys can be associated with specific scopes or permissions that define the level of access the client has to the API resources.
    - The server verifies the permissions associated with the API key before granting access to certain resources or operations.

<br>

6.  Rate Limiting:

    - API Keys can be used to enforce rate limits on API usage.
    - The server tracks the number of requests made by each API Key and enforces limits to prevent abuse or excessive usage.

API Key-based authentication provides a lightweight and straightforward method to authenticate clients in APIs. It requires clients to include a valid API Key in their requests, allowing the server to verify their authenticity. It is often use for public APIs, where authentication and access control requirements are less stringent compared to user-specific authentication methods like OAuth.
<br>
While API Key-based authentication is simple to implement, it mey lack the granular control and identity management features provided by more robust authentication mechanisms like OAuth. Therefore, it is typically used in scenarios where a basic level of authentication is sufficient.

<br>

#### OAuth 2.0 - <small><https://oauth.net/2/></small>

OAuth 2.0 (Open Authorization 2.0) is an authorization framework that allows third-party applications to obtain limited access to protected resources on behalf of a resource owner (user), without exposing the user's credentials to the application. It provides a standardized way to grant access to APIs and web services securely.
<br>
OAuth 2.0 involves several key entities:

1.  Resource Owner: The user who owns the protected resources (e.g,. a website user or an application user).
2.  Client: The application or service that want sto access the user's protected resources.
3.  Authorization Server: The server that hosts the protected resources the client wants to access.
4.  Resource Server: The server that hosts the protected resources the client wants to access.

<br>

The OAuth 2.0 flow typically involves the following steps:

1.  Client Registration: The client registers with the authorization server, requesting authorization to access the user's resources.
2.  Authorization Request: The client redirects the user to the authorization server, requesting authorization to access the user's resources.
3.  User Authentication: The user authenticates themselves with the authorization server,
    verifying their identity.
4.  Authorization Grant: The user grants permissions to the client to access their resources. This is often dene by the user explicitly approving the request.
5.  Access Token Request: The client sends an authorization grant and client credentials to the authorization server, requesting an access token.
6.  Access Token Issuance: The authorization server validates the request, and if successful, issues and access token to the client.
7.  Resource Access: The client presents the access token to the resource server to access the protected resources on behalf of the client.
    <br><br>
    OAuth 2.0 provides several grant types for different scenarios, such as authorization code flow, implicit flow, client credentials flow, and resource owner password credentials flow. Each grant type has its own specific use cases and security considerations.
    <br><br>
    OAuth 2.0 is widely used by various services and APIs to provide secure and controlled access to resources without the need for sharing sensitive user credentials with third-party applications.

<br>

#### OAuth2 vs Token Based Authentication - what are differences?

OAuth2 and token-based authentication are related concepts but serve different purposes:

<br>

OAuth2:

- OAuth2 is an authorization framework that allows third-party applications to obtain limited access to protected resources on behalf of a resource owner (user).
- It is primarily used for granting access permissions to APIs and web services.
- OAuth2 involves multiple entities, including the resource owner (user), client (third-party application), authorization server, and resource server.
- The client obtains an access token from the authorization server after the user grants permission.
- The access token is used to authenticate and authorize the client to access specific resources on the resource server.
- OAuth2 allows for fine-grained access control, delegation of user permissions, and secure authentication through authorization codes, implicit grants, client credentials, or resource owner password credentials.

<br>

Token-Based Authentication:

- Token-based authentication is a broader authentication approach that uses tokens (such as JSON Web Tokens - JWTs) to verify the identity of a client.
- It is not specific to the OAuth2 framework and can be used independently for various authentication scenarios.
- Token-based authentication involves the issuance of token (usually a JWT) upon successful authentication.
- The client includes the token in subsequent requests to authenticate itself and access protected resources.
- Tokens can be self-contained and carry information about the user (claims) or simply serve as a prof of authentication.
- Token-based authentication can be used for both user-specific authentication and client authentication in APIs.
  <br><br>
  In summary, OAuth2 is primarily focused on authorization, granting access permissions to third-party applications, and delegating user permissions. It involves multiple entities and follows a specific authorization flow. On the other hand, token-based authentication is a more general authentication approach that uses tokens to verify the identity of a client. It can be used independently of OAuth2 and is commonly employed for user-specific authentication in APIs.
