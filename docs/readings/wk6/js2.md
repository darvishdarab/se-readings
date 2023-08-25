---
id: js2
title: Accomplishing more with JS
sidebar_label: Accomplishing more with JS
---

The power of JS and the myriad of things you can do with it in front-end development goes well beyond a simple form validation. To get a better taste of JS, let's do a more interesting task. 

:::info TASK
The goal here is to enhance the `employers` view by adding a little button labled **X** next to each emloyer. When the user clicks that button, a post request with employer's name is sent to `delemployers` route on the server to remove that employer from the database, before the page is reloaded to show updated content.
:::

Let's make it happen! First, make sure you have an active HTTP DELETE `employers` API endpoint in your server to accept post requests and delete the employer from the `employers` table based on `name` query param i.e., employer's name; recall that an employer name is _unique_ in the `employers` table:

```java
// delete an employer
Spark.delete("/employers", (req, res) -> {
    String name = req.queryParams("name");
    Dao emDao = getEmployerORMLiteDao();
    List<Employer> ems = emDao.queryForEq("name", name);
    int del = 0;
    if (ems != null  && !ems.isEmpty()) {
        del = emDao.deleteById(ems.get(0).getId());
    }
    res.status(200);
    res.type("application/json");
    if (del > 0) {
        return new Gson().toJson(ems.get(0).toString());
    }
    return new Gson().toJson("{}");
});
```

Then, go to `employers.vm` and insert the following at the end of the `li` tag.

```html
<button type="button" id="$em.name">X</button>
```

So, it should now be:

```html
<li>
    <i>$em.name</i> is a ($em.sector) company: $em.summary.
    <button type="button" id="$em.name">X</button>
</li>
```

This will add a little `X` button next to each employer. 

:::tip
Note how we use the employer's name to set `id` attribute of each button. This info makes it easy on the front-end side to delete the employer whenever a delete button is clicked.    
:::


After that, create a file named `employers.js` under the `src/resources/public/js` folder with the following content:

```js
function deleteEmployer(employerName) {
    fetch('http://localhost:7000/employers?name=' + employerName, {
            method: 'Delete',
        }
    ).then(res => window.location.reload = window.location.reload(true));
}

let delButtons = document.querySelectorAll("li > button")
Array.prototype.forEach.call(delButtons, function(button) {
    button.addEventListener('click', deleteEmployer.bind(null, button.id));
});
```

And finally add `<script src="js/employers.js"></script>` to `employers.vm` before `</body>` (i.e. before `#parse("public/bottom.vm")`).

### How does it all work?

In the JS code, we first get all the little buttons using `querySelectorAll` by selecting all `button` tags nested inside `li` tags. Then, we add an event listener for the `click` event of each of the buttons so that whenever a delete button is clicked the `deleteEmployer` function is invoked and the corresponding employer name is passed to it. Inside the `deleteEmployer` function above, we send a post request, using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to the HTTP DELETE `employers` route supplying the employer name as a query param resulting in removal of the employer with that name. Since the sending and processing of the post request can take a bit of time, once the response is ready we reload the page using `window.location.reload(true)` to have the updated content displayed!