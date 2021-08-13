---
title: "Network Interview"
date: "2021-07-24"
---
# Network Interview

## Restful

A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources.

An API for a website is code that allows two software programs to communicate with each other. The API spells out the proper way for a developer to write a program requesting services from an operating system or other application.

A RESTful API -- also referred to as a RESTful web service or REST API -- is based on representational state transfer (REST), which is an architectural style and approach to communications often used in web services development.

REST technology is generally preferred over other similar technologies. This tends to be the case because REST uses less bandwidth, making it more suitable for efficient internet usage. RESTful APIs can also be built with programming languages such as JavaScript or Python.


The REST used by browsers can be thought of as the language of the internet. With cloud use on the rise, APIs are being used by cloud consumers to expose and organize access to web services. REST is a logical choice for building APIs that allow users to connect to, manage and interact with cloud services flexibly in a distributed environment. RESTful APIs are used by such sites as Amazon, Google, LinkedIn and Twitter.

How RESTful APIs work
A RESTful API breaks down a transaction to create a series of small modules. Each module addresses an underlying part of the transaction. This modularity provides developers with a lot of flexibility, but it can be challenging for developers to design their REST API from scratch. Currently, several companies provide models for developers to use; the models provided by Amazon S3, Cloud Data Management Interface (CDMI) and OpenStack Swift are the most popular.

A RESTful API uses commands to obtain resources. The state of a resource at any given timestamp is called a resource representation. A RESTful API uses existing HTTP methodologies defined by the RFC 2616 protocol, such as:

GET to retrieve a resource;
PUT to change the state of or update a resource, which can be an object, file or block;
POST to create that resource; and
DELETE to remove it.
With REST, networked components are a resource the user requests access to -- like a black box whose implementation details are unclear. All calls are stateless; nothing can be retained by the RESTful service between executions.

Data formats the REST API supports include:

* application/json
* application/xml
* application/x-wbe+xml
* application/x-www-form-urlencoded
* multipart/form-data

### Uses
Because the calls are stateless, REST is useful in cloud applications. Stateless components can be freely redeployed if something fails, and they can scale to accommodate load changes. This is because any request can be directed to any instance of a component; there can be nothing saved that has to be remembered by the next transaction. That makes REST preferable for web use. The RESTful model is also helpful in cloud services because binding to a service through an API is a matter of controlling how the URL is decoded. Cloud computing and microservices are almost certain to make RESTful API design the rule in the future.

RESTful API Design and Architecture Constraints
RESTful API design was defined by Dr. Roy Fielding in his 2000 doctorate dissertation. In order to be a true RESTful API, a web service must adhere to the following six REST architectural constraints:

Use of a uniform interface (UI). Resources should be uniquely identifiable through a single URL, and only by using the underlying methods of the network protocol, such as DELETE, PUT and GET with HTTP, should it be possible to manipulate a resource.
Client-server based. There should be a clear delineation between the client and server. UI and request-gathering concerns are the client's domain. Data access, workload management and security are the server's domain. This loose coupling of the client and server enables each to be developed and enhanced independent of the other.
Stateless operations. All client-server operations should be stateless, and any state management that is required should take place on the client, not the server.
RESTful resource caching. All resources should allow caching unless explicitly indicated that caching is not possible.
Layered system. REST allows for an architecture composed of multiple layers of servers.
Code on demand. Most of the time, a server will send back static representations of resources in the form of XML or JSON. However, when necessary, servers can send executable code to the client.
Common REST API challenges
Besides the design and architecture constraints, individuals will have to confront some challenges with REST APIs. Some concepts which may be challenging can include:

Endpoint consistency -- paths of endpoints should be consistent by following common web standards, which may be difficult to manage.
API versioning -- endpoint URLs shouldn't be invalidated when used internally or with other applications.
Long response times and too much data -- the amount of returned resources can increase in size in time, adding to increased load and response times.
Navigation paths and user input locations -- because REST uses URL paths for input parameters, determining URL spaces can be challenging.
Security -- which has a lot of aspects to keep an eye on, including the use of:
### HTTPS;
blocking access from unknown IP addresses and domains;
validating URLs;
blocking unexpectedly large payloads;
logging requests; and
investigating failures.
Authentication -- use common authentication methods such as HTTP basic authentication (which allows for a base64-encoded username:password string), API keys, JSON Web Tokens and other access tokens. OAuth 2.0, for example, is good for access control.
Requests and data -- requests may have more data and metadata than needed or more requests may be needed to obtain all the data. APIs can be adjusted for this.
API testing -- can be a long process to set up and run. Each part of the process can be either long or challenging. Testing can also be done in the command line with the utility Curl. Parts of the testing process that may be challenging include:
Initial setup
Schema updates
Test parameter combinations
Sequence API calls
Validate test parameters
System integration
Define error codes and messages.
With error codes, it is more of a common practice to use standard HTTP error codes. These are recognized by clients and developers more often.
Error handling may not have a way to distinguish if a response is successful or not besides parsing the body or checking for an error.
REST vs. SOAP
REST and Simple Object Access Protocol (SOAP) offer different methods to invoke a web service. REST is an architectural style, while SOAP defines a standard communication protocol specification for XML-based message exchange. REST applications can use SOAP.

RESTful web services are stateless. A REST-based implementation is simple compared to SOAP, but users must understand the context and content being passed along, as there's no standard set of rules to describe the REST web services interface. REST services are useful for restricted profile devices, such as mobile, and are easy to integrate with existing websites.

SOAP requires less plumbing code -- meaning low-level, infrastructural code that connects main code modules together -- than REST services design. The Web Services Description Language describes a common set of rules to define the messages, bindings, operations and location of the service. SOAP web services are useful for asynchronous processing and invocation.

#### History of RESTful APIs
Prior to REST, developers used SOAP to integrate APIs. To make a call, developers handwrote an XML document with a Remote Procedure Call (RPC) in the body. They then specified the endpoint and POST their SOAP envelope to the endpoint.

In 2000, Roy Fielding and a group of developers decided to create a standard so that any server could talk to any other server. He defined REST and the architectural constraints explained above in his 2000 Ph.D. dissertation at the University of California, Irvine. These universal rules make it easier for developers to integrate software.

Salesforce was the first company to sell an API as part of its "Internet as a Service" package in 2000. However, few developers were actually able to use the complicated XML API. Then eBay built a REST API, which expanded its market to any site that could access its API. This caught the attention of another e-commerce giant, and Amazon announced its API in 2002.

Flickr launched its own RESTful API in August 2004, enabling bloggers to easily embed images on their sites and social media feeds. Facebook and Twitter both released their APIs in 2006, buckling under the pressure of developers who scraped the sites and created "Frankenstein" APIs. When Amazon Web Services (AWS) helped launch the cloud in 2006, developers were able to access data space in minutes using AWS's REST API, and the request for public APIs quickly escalated.

Since then, developers have embraced RESTful APIs, using them to add functionality to their websites and applications. Today, REST APIs are considered the "backbone of the internet."

### HTTP Reponse Codes

* 資訊回應 (Informational responses, 100–199),
* 成功回應 (Successful responses, 200–299),
* 重定向 (Redirects, 300–399),
* 用戶端錯誤 (Client errors, 400–499),
* 伺服器端錯誤 (Server errors, 500–599).

### Information responses
#### 100 Continue
This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.
#### 101 Switching Protocol
This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.
#### 102 Processing (WebDAV)
This code indicates that the server has received and is processing the request, but no response is available yet.
#### 103 Early Hints
This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.
### Successful responses
#### 200 OK
The request has succeeded. The meaning of the success depends on the HTTP method:
* GET: The resource has been fetched and is transmitted in the message body.
* HEAD: The representation headers are included in the response without any message body.
* PUT or POST: The resource describing the result of the action is transmitted in the message body.
* TRACE: The message body contains the request message as received by the server.
#### 201 Created
The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests.
#### 202 Accepted
The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
#### 203 Non-Authoritative Information
This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.
#### 204 No Content
There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
#### 205 Reset Content
Tells the user-agent to reset the document which sent this request.
#### 206 Partial Content
This response code is used when the Range header is sent from the client to request only part of a resource.
#### 207 Multi-Status (WebDAV)
Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
#### 208 Already Reported (WebDAV)
Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
#### 226 IM Used (HTTP Delta encoding)
The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
Redirection messages
#### 300 Multiple Choice
The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)
#### 301 Moved Permanently
The URL of the requested resource has been changed permanently. The new URL is given in the response.
#### 302 Found
This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
#### 303 See Other
The server sent this response to direct the client to get the requested resource at another URI with a GET request.
#### 304 Not Modified
This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
#### 305 Use Proxy 
Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
#### 306 unused
This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.
#### 307 Temporary Redirect
The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.
#### 308 Permanent Redirect
This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.
### Client error responses
#### 400 Bad Request
The server could not understand the request due to invalid syntax.
#### 401 Unauthorized
Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
#### 402 Payment Required 
This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.
#### 403 Forbidden
The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.
#### 404 Not Found
The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.
#### 405 Method Not Allowed
The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.
#### 406 Not Acceptable
This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
#### 407 Proxy Authentication Required
This is similar to 401 but authentication is needed to be done by a proxy.
#### 408 Request Timeout
This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
#### 409 Conflict
This response is sent when a request conflicts with the current state of the server.
#### 410 Gone
This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
#### 411 Length Required
Server rejected the request because the Content-Length header field is not defined and the server requires it.
#### 412 Precondition Failed
The client has indicated preconditions in its headers which the server does not meet.
#### 413 Payload Too Large
Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
#### 414 URI Too Long
The URI requested by the client is longer than the server is willing to interpret.
#### 415 Unsupported Media Type
The media format of the requested data is not supported by the server, so the server is rejecting the request.
#### 416 Range Not Satisfiable
The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
#### 417 Expectation Failed
This response code means the expectation indicated by the Expect request header field can't be met by the server.
#### 418 I'm a teapot
The server refuses the attempt to brew coffee with a teapot.
#### 421 Misdirected Request
The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
#### 422 Unprocessable Entity (WebDAV)
The request was well-formed but was unable to be followed due to semantic errors.
#### 423 Locked (WebDAV)
The resource that is being accessed is locked.
#### 424 Failed Dependency (WebDAV)
The request failed due to failure of a previous request.
#### 425 Too Early 
Indicates that the server is unwilling to risk processing a request that might be replayed.
#### 426 Upgrade Required
The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).
#### 428 Precondition Required
The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
#### 429 Too Many Requests
The user has sent too many requests in a given amount of time ("rate limiting").
#### 431 Request Header Fields Too Large
The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.
#### 451 Unavailable For Legal Reasons
The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
### Server error responses
#### 500 Internal Server Error
The server has encountered a situation it doesn't know how to handle.
#### 501 Not Implemented
The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
#### 502 Bad Gateway
This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
#### 503 Service Unavailable
The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
#### 504 Gateway Timeout
This error response is given when the server is acting as a gateway and cannot get a response in time.
#### 505 HTTP Version Not Supported
The HTTP version used in the request is not supported by the server.
#### 506 Variant Also Negotiates
The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
#### 507 Insufficient Storage (WebDAV)
The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
#### 508 Loop Detected (WebDAV)
The server detected an infinite loop while processing the request.
#### 510 Not Extended
Further extensions to the request are required for the server to fulfill it.
#### 511 Network Authentication Required
The 511 status code indicates that the client needs to authenticate to gain network access.