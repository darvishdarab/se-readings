---
id: rest
title: RESTful API
sidebar_label: REST
---

A common practice to separate the Client and Server is Representational State Transfer, or REST architecture style.

In this style, the implementation of the client and the server are done independently without each knowing about the other. This means that the code on the client/server side can be changed at any time without affecting the other side.

:::tip
REST-compliant systems, often called RESTful systems.
:::

**It is said that RESTful systems are stateless.** In the Client-Server architecture, stateless means the server does not need to know anything about what state the client is in and vice versa.

:::tip
RESTful API is an API that conforms to REST style.
:::

HTTP fits well with the REST style: the client and the server communicate through sending "messages" to one another. Statelessness of REST means the server and the client must understand any message received, without seeing previous messages.

Implementing RESTful (or simply REST) APIs using HTTP is so common that people tend to mistakenly think HTTP and REST are the same thing. For example, see the followings:

* [Are REST and HTTP the same thing?](https://restcookbook.com/Miscellaneous/rest-and-http/)
* [What is the difference between HTTP and REST?](https://stackoverflow.com/questions/2190836/what-is-the-difference-between-http-and-rest)