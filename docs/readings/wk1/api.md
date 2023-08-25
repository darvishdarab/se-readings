---
id: api
title: API
sidebar_label: API
---

[Application Programming Interface](https://en.wikipedia.org/wiki/API) or API is what allows one software application to "talk" to another. Imagine you want to connect your calendar and to-do application and keep them in sync; you would need to work with their APIs. Most modern software applications and almost the entire Web is made up of APIs. Naturally, this is where we start OOSE.

:::info
In a nutshell, an API is just a set of rules (protocol) that allow two software systems to be linked regardless of any differences in their internal processes, structure or design. The most common protocol for building APIs is HTTP.
:::

HTTP stands for Hypertext Transfer Protocol. It owes its popularity to the ubiquity of web applications and its simplicity and ease of use. HTTP is the foundation of any data exchange on the Web. At its core, it functions as a request-response protocol in the client-server computing model.

:::info
In the client-server model, the software (system) that sends a request is the *client*, and the one that responds to the request is the *server*.
:::

For example, to visit a website, you enter its URL in a browser application. The browser sends a request to fetch the HTML document that represents the landing page of the website. The browser in this scenario is the client. It sends its request in HTTP. The request travels from your computer to your modem/router and then through the internet until it reaches a server. A server appears as only a single machine virtually. Still, it may be a collection of computers, sharing the load (load balancing) or a complex piece of software interrogating other computers. The server processes the request, retrieves the requested resource, performs the necessary actions, and sends the response back to your browser in HTTP. The browser then interprets the response data and presents you with the web page you wanted.

![](../../../static/img/client-server-1.png)