# Lecture 98 - What is Server and How to Create an HTTP Server

## What is Server?
**A server is a computer program or device that provides a service to another computer program and its user, also known as the client**. In a data Center, the physical Computer a server program runs on is also frequently referred to as a server.

## Types of Server Applications

Here are some examples of server applications:

- ASGI
- TOMCAT
- PUMA
- HA Proxy
- Apache
- NGINX
- HTTP

## Types of Servers

1. **Web servers**: Web servers are responsible for delivering web pages and other resources over the Internet. When a user requests a web page by typing in a URL or clicking on a link, their web browser sends a request to a web server, which then sends back the appropriate response. Some popular web servers include *Apache*, *Nginx*, and *Microsoft* *IIS*.
2. **File servers**: File servers provide a centralized location for storing and sharing files on a network Users can access files on a file server from their computers or other devices, and can Often control access to the files through permissions and authentication. Some Examples of file Server Software include W**indows File Server**, *FreeNAS,* and *ownCloud*.
3. **Email servers**: Email servers are used to send and receive email messages over a network. They typically use standard email protocols like *SMTP,* *IMAP,* and *POP* to communicate with email clients and other servers. Popular email server software includes *Microsoft Exchange*, *Postfix*, and *Dovecot.*
4. **Database servers**: Database servers are used to store and manage large amounts of data in a centralized location, They provide to the data through a variety Of protocols and interfaces and often support advanced features like replication and failover for increased reliability. Some examples of database server software include *MySQL*, *Microsoft SQL*
*Server*, and *Oracle Database*.
5. **Game servers**: Game servers are used to host multiplayer games over the internet. They typically provide game-related services like matchmaking, player authentication, and game-state synchronization. Some popular game server software includes Steam. Minecraft, and Unreal Engine.
6. **Proxy servers**: Proxy servers act as an intermediary between clients and other servers on a network. They can be used to improve performance by caching frequently requested resources or to provide additional security and anonymity by hiding the client's IP address.
Examples of proxy server software include Squid and Nginx.
7. **DNS servers**: ONS (Domain Name System) servers are used to translate domain names (like [example.com](http://example.com/)) into IP addresses that computers can use to locate servers and other devices on a network, They typically operate in a hierarchical Structure and use a variety Of caching and routing techniques to optimize performance. Popular DNS server software includes
BIND, PowerDNS, and Unbound.

## A Raw HTTP Server

```js
const http = require('http');

const handler = (request, response) => {
    response.end('Hello World');
};
const server = http.createServer(handler);

server.listen(8000, 'Server is listening on port 8000');
```

## HTTP Server With Router

```js
const http = require('http');

const handler = (request, response) => {
    const { url, method } = request;
    if (url === '/' && method === 'GET') {
        response.end('Hello World');
    } else if (url === '/about' && method === 'GET') {
        response.end('About Page');
    } else {
        response.end('Not Found');
    }
};

const server = http.createServer(handler);

server.listen(8000, 'Server is listening on port 8000');
```
