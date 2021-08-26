---
title: "JavaScriptInterview"
date: "2021-07-24"
---
# JavaScript

### Fetch API

The Fetch API provides JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP.

Difference between jQuery.ajax()
* The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, as soon as the server responds with headers, the Promise will resolve normally (with the ok property of the response set to false if the response isn’t in the range 200–299), and it will only reject on network failure or if anything prevented the request from completing.
* fetch() won’t send cross-origin cookies unless you set the credentials init option. (Since April 2018. The spec changed the default credentials policy to same-origin. Firefox changed since 61.0b13.)

#### Response objects

The most common response properties you'll use are:

* Response.status — An integer (default value 200) containing the response status code.
* Response.statusText — A string (default value ""), which corresponds to the HTTP status code message. Note that HTTP/2 does not support status messages.
* Response.ok — seen in use above, this is a shorthand for checking that status is in the range 200-299 inclusive. This returns a boolean value.

#### Body
Both requests and responses may contain body data. A body is an instance of any of the following types:

* ArrayBuffer
* ArrayBufferView (Uint8Array and friends)
* Blob/File
* string
* URLSearchParams
* FormData
* The Request and Response interfaces share the following methods to extract a body. These all return a promise that is eventually resolved with the actual content.

```
Request.arrayBuffer() / Response.arrayBuffer()
Request.blob() / Response.blob()
Request.formData() / Response.formData()
Request.json() / Response.json()
Request.text() / Response.text()
```

### prototype in JavaScript / Inheritance and the prototype chain
JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.

While this confusion is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model.

All functions have a special property named prototype

instance's \_\_proto\_\_ point to constructor function's prototype

Otherwise, if the \__proto__ of doSomeInstancing does not have the property, then the \__proto__ of the \__proto__ of doSomeInstancing is checked for the property. By default, the \__proto__ of any function's prototype property is window.Object.prototype. So, the \__proto__ of the \__proto__ of doSomeInstancing (a.k.a. the \__proto__ of doSomething.prototype (a.k.a. Object.prototype)) is then looked through for the property being searched for.


If the property is not found in the \__proto__ of the \__proto__ of doSomeInstancing, then the \__proto__ of the \__proto__ of the \__proto__ of doSomeInstancing is looked through. However, there is a problem: the \__proto__ of the \__proto__ of the \__proto__ of doSomeInstancing does not exist. Then, and only then, after the entire prototype chain of \__proto__'s is looked through, and there are no more __proto__s does the browser assert that the property does not exist and conclude that the value at the property is undefined

```
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype

```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTc1OTY0NTU3N119
-->