---
id: get
title: "Endpoint: HTTP Get"
sidebar_label: "Endpoint: HTTP Get"
---

Our first task is simple:
If client access `SERVER_URL/employers`, it will `Get` a **list of employers**. Note that `SERVER_URL` for now is port `7000` on **localhost** ([`http://127.0.0.1:7000/`](http://127.0.0.1:7000/)) on your computer. 

Here is the code:

```java
public static void main(String[] args) throws SQLException {
    final int PORT_NUM = 7000;
    Spark.port(PORT_NUM);
    get("/", (req, res) -> "Welcome to JBApp!");
    get("/employers", (req, res) -> {
        String results = new Gson().toJson(getORMLiteDao().queryForAll());
        res.type("application/json");
    return results;
    });
}
```

Each of the above `get` function calls  defines an api endpoint and is called a _route_.

:::info
We will use JSON to transfer data between server and client so "the list of employers" will be a JSON Array.
:::

## Get set up!

The following *selects* and returns all the records (rows) of the `employers` table:

```java
getORMLiteDao().queryForAll()
```

Note the call to the helper method `getORMLiteDao()` to get a new instance of Dao object to the `employers` table.

Here is the implemetation of `getORMLiteDao()` helper method:

```java
private static Dao getORMLiteDao() throws SQLException {
    final String URI = "jdbc:sqlite:./JBApp.db";
    ConnectionSource connectionSource = new JdbcConnectionSource(URI);
    return DaoManager.createDao(connectionSource, Employer.class);
}
```

:::caution
In order for the above code to work, the `JBApp` database should exist with a valid `employers` table in it (and ideally some rows in the table). For more info on how to create a databse and tables, and insert rows into them, refer to the previous readings under [Persistence with Databases](sql) section.
:::

`getORMLiteDao()` returns a `Dao` object to the `employers` table on which we can make various queries. In this case, we get the list of all emplyers from the `employers` table that pass into the `toJson` method of `Gson` to convert them into a JSON array of employers and store 
them into a string. 

:::tip JSON
JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays. Watch [this](https://www.youtube.com/watch?v=iiADhChRriM) video for an intro to JSON!
:::

:::tip Gson
Gson is a Java library that can be used to convert Java Objects into their JSON representation. It can also be used to convert a JSON string to an equivalent Java object. Gson is an open-source project hosted at [http://code.google.com/p/google-gson](http://code.google.com/p/google-gson). In order to use Gson in your Gradle project, add this dependency to `build.gradle`:

```groovy
implementation 'com.google.code.gson:gson:2.8.8'
```

:::

Next, we need to set the content type of our _http response_ as well as the response _status_. Since we are returning the data in JSON format, we set it accordingly, and we also set the status to `200` to indicate success:

```java
res.type("application/json");
res.status(200);
```

Eventually, we return the `results`.

## HTTP content type and statuses

You can see a full list of different MIME types [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types). Also, the following table shows different http status codes and their meaning:

| Status | Meaning |
| --- | --- |
|200 (OK)	| This is the standard response for successful HTTP requests. |
|201 (CREATED) | This is the standard response for an HTTP request that resulted in an item being successfully created. |
|204 (NO CONTENT)	| This is the standard response for successful HTTP requests, where nothing is being returned in the response body. |
|400 (BAD REQUEST) | The request cannot be processed because of bad request syntax, excessive size, or another client error. |
|403 (FORBIDDEN) | The client does not have permission to access this resource. |
|404 (NOT FOUND) | The resource could not be found at this time. It is possible it was deleted, or does not exist yet. |
|500 (INTERNAL SERVER ERROR) | The generic answer for an unexpected failure if there is no more specific information available. |



If you run the application and point your browser to [`http://127.0.0.1:7000/employers`](http://127.0.0.1:7000/employers), you must see a list of employers in JSON array format, something like:

```plain
[{"id":1,"name":"Nestle","sector":"Food/Drink","summary":""},{"id":2,"name":"Mitsubishi","sector":"Automative","summary":"Mitsubishi Corporation (MC) is a global integrated business enterprise that develops and operates businesses together with its offices and subsidiaries in approximately 90 countries and regions worldwide, as well as a global network of around 1,700 group companies."}]
```

:::tip
You can use a browser extension like [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) to _prettify_ the output into a more readable one.
:::

