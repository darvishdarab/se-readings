---
id: api
title: Separation of client and server
sidebar_label: Separation of Client and Server
---

We have established that our interest lies in software solutions that conform to the Client-Server architecture. If you are still not so clear on Client-Server model, re-read [Client-Server](../wk1/client_server) section as well as this [wikipedia](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) article.

![](../../../static/img/client-server-1.png)

A common practice to separate the Client and Server is **Representational State Transfer**, or **REST** architecture style.
In this style, the implementation of the client and the server are done independently without each knowing about the other. This means that the code on the client/server side can be changed at any time without affecting the other side. 

:::info RESTful
REST-compliant systems, often called RESTful systems.
:::


:::tip REST is stateless!
On important characterstic of RESTful systems is that they are stateless. In the Client-Server architecture, stateless means the server does not need to know anything about what state the client is in and vice versa. 
:::


So then how does client and server collaborate (communicate)? They do so through sending "**messages**" to one another. The client sends a _request_ message and the server replies with a _response_ message. Each request message sent by the client must be self-contained: _Statelessness of REST means the server and the client must understand any message received, without seeing previous messages._ For more info on REST, read [this](https://en.wikipedia.org/wiki/Representational_state_transfer).

# Communication between Client and Server 

As long as each side knows what format of messages to send to the other, they can communicate with one another. 
The messages send in between are generally categorized into **request** and **response** messages. And, the most common **protocol** for communication is **HTTP**.

## What is HTTP? 

HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet.
    
There are 4 basic HTTP _verbs_ (operation) we use in requests to interact with server:

* **GET** — retrieve a specific resource (by id) or a collection of resources
* **POST** — create a new resource
* **PUT** — update a specific resource (by id)
* **DELETE** — remove a specific resource by id

A HTTP request, in addition to an HTTP verb, typically consists of:

* a *header*, which allows the client to pass along information about the request
* a *path* to a resource
* an optional message *body* containing data

## What is RESTful API?

Application Program Interface (API) permits the interaction between two systems. A RESTful API is an API that conforms to REST style and establishes what functionalities the server provides to the client and how it provides them. 

## What is API Endpoint? 

HTTP requires data to be transferred from one point to another over the network.
An API endpoint is the point of entry in a communication channel when client and server interacting.

:::info
We will next develop a few API endpoints for MyBooksApp. But first, we need a _framework_ to help with the implementation!
:::

:::tip 
After you finish all the "RESTful API" section readings, if you want to have a practical overview of http (and its methods) and REST, this [video](https://www.youtube.com/watch?v=iYM2zFP3Zn0) and this [one](https://www.youtube.com/watch?v=Q-BpqyOT3a8) do a good job. Note though that some of their contents are out of the scope of our class.
:::
