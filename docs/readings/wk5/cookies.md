---
id: cookies
title: HTTP cookies
sidebar_label: HTTP Cookies
---

## Enter your username

Let's toy with the idea of having users login to JBApp. For now, we just ask for their username and welcome them! Before we dive into this, we need to learn about HTTP cookies!

## Me want cookies!

In order to capture the username from the user, we use HTTP Post. Then, we redirect that information to HTTP Get. We can do this by capturing `req.queryParams("username");` and store it in our web-server application. It would be, however, an anti-pattern! RESTful API is meant to be _stateless_ (server should not care about the state of the client, e.g. if client is signed in or not). The generally accepted way to make HTTP appear to be stateful is by storing little bits of data (that are stored on the client) and send on each request to the server. These are called **cookies**. 

:::info HTTP Cookie (from [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies))
An HTTP cookie (web cookie, browser cookie) is a small piece of data, usually in the form of a randomly encoded text file, that a server sends to the user's web browser. The browser may store it and send it back with later requests to the same server. Typically, it's used to tell if two requests came from the same browser — keeping a user logged-in, for example. It remembers stateful information for the stateless HTTP protocol.
:::

:::tip from [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
Cookies are mainly used for three purposes:

* Session management: Logins, shopping carts, game scores, or anything else the server should remember
* Personalization: User preferences, themes, and other settings
* Tracking: Recording and analyzing user behavior
:::

## JBApp

Now, with that intro, let us add a http post endpoint on `/` as follows:

```java
post("/", (req, res) -> {
    String username = req.queryParams("username");
    res.cookie("username", username);
    res.redirect("/");
    return null;
});
```
As you can see, anytime a post request with a `username` is provided to the homepage, a cookie is set on the response that is sent back to the client. The client will include this cookie in all its future requests to the server.

:::info
You browser should include the `username` cookie automatically in all future requests, so you should need not to do anything further about this!
:::

Now, instead of `index.html` that we currently use, let us add `index.vm` under `src/main/reources/public` as follows:

```html
#set( $title = "Welcome Page" )
#parse("public/top.vm")

#if($username)
<h1>Welcome to JBApp</h1>
<div>
    <p><a href="/employers">Show all employers</a></p>
    <p><a href="/addemployer">Add an employer</a></p>
</div>
#else
<h1>Please login first!</h1>
<form action="/" method="post">
    <input type="text" placeholder="username" name="username"/>
    <button>Sign in</button>
</form>
#end

#parse("public/bottom.vm")
```

In `index.vm` we check to see if `username` cookie is supplied or not. If not, we show the login HTML _form_. Otherwise, we show the front page.

:::info
HTML `form` is a construct to collect data from user. An HTML form contains form elements: text fields, checkboxes, radio buttons, submit buttons, and more.
:::


Finally, we need to update our http get endpoint on `/` route:

```java
get("/", (req, res) -> {
    Map<String, Object> model = new HashMap<>();
    if (req.cookie("username") != null)
        model.put("username", req.cookie("username"));
    return new ModelAndView(model, "public/index.vm");
}, new VelocityTemplateEngine());
```

Here, we check whether the `username` cookie is set or not. If it is, we make it part of the model to be passed into `index.vm`.

Now, if you point your browser to JBApp [homepage](http://localhost:7000/), you should be prompted first to enter a username. Once, you do that, you should be able to see the front page with a welcome message to the username that you entered along with the two links in it.
