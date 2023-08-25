---
id: addemployer
title: Add an employer
sidebar_label: Add an employer
---

Now, let's implement a new view to facilitate adding employers. Add the following route to `Main.main`:

```java
get("/addemployer", (req, res) -> {
    Map<String, Object> model = new HashMap<String, Object>();
    return new ModelAndView(model, "public/addemployer.vm");
}, new VelocityTemplateEngine());
```


Note we already implemented a [HTTP post `employers` endpoint](../wk4/post) to add new employers. The following is the content of `addemployer.vm` file:

```html
#set($title = "Add employer")
#parse("public/top.vm")

<h2>Add a new employer</h2>
<form action="/employers" method="post" >
    <div>
        <label for="name">Name: </label>
        <input type="text" name="name" placeholder="name" id="name" required>
    </div>
    <div>
        <label for="sector">Sector: </label>
        <input type="text" name="sector" placeholder="sector" id="sector" />
    </div>
    <div>
        <label for="summary">Summary: </label>
        <input type="text" name="summary" placeholder="summary" id="summary" />
    </div>
    <br />
    <input type="submit" value="Submit" id="submitAddEmployer" />
</form>

#parse("public/bottom.vm")
```

Now, point your browser to [`http://localhost:7000/`](http://localhost:7000/) and click on "Add an employer". Fill the form and hit `Submit`. If things work, you should receive a `JSON` reponse back which is a confirmation that the new employer was added successfully to the `employers` table.

:::caution Controller Code
You might have noticed our `Main.main()` is getting very long. In general, `Main.main()` is not the best place to list and process all API requests. It would be sensible to move the "controller" code somewhere else. One viable approach is to introduce a new Java package named `controller` under `src/main/java` and create class(es) that contain controller code. Then, we just receive http requests in `Main`, but then we _route_ each request to a suitable controller class for actual processing. Finally, you may want to rename the `Main` class to something more meaningful like `Server`!
:::

:::info
To get more details on Apache Velocity, refer to its [user guide](http://velocity.apache.org/engine/1.7/user-guide).
:::