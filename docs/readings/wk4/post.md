---
id: post
title: "Endpoint: HTTP Post"
sidebar_label: "Endpoint: HTTP Post"
---

:::info from [WIKIPEDIA](https://en.wikipedia.org/wiki/POST_(HTTP))
By design, the POST request method requests that a web server accepts the data enclosed in the body of the request message, most likely for storing it. It is often used when uploading a file or when submitting a completed web form.
:::

Assume in the JBApp, we want to allow the user (company profiles) to enter and save employers info into the system aside from posting jobs. These entries can be made (on a web form) and will be `Post`ed to the server for processing (i.e., getting stored in the database). Let's add such an "add" functionality for employers. We need a post endpoint:

```java
 Spark.post("/employers", (req, res) -> {
    String name = req.queryParams("name");
    String sector = req.queryParams("sector");
    String summary = req.queryParams("summary");
    Employer em = new Employer(name, sector, summary);
    getORMLiteDao().create(em);
    res.status(201);
    res.type("application/json");
    return new Gson().toJson(em.toString());
});
```
Note how we first parse/read the _post query parameters_ `name`, `sector` and `summary` from the received post request. Then, we use them to create a new
`Employer` object before using `employerDao` to insert it into the `employers` table for us. Next, we set the response status to `201` (i.e. success - item being successfully created.) Finally, we return the inserted employer as a JSON (as a confirmation back to the client).




