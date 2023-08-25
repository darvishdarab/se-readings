---
id: reuse
title: Template reuse
sidebar_label: Template Reuse
---


## Overview

Many parts of html files are repetitive in all html files; As a principle, code duplication is something we want to avoid. We identify such parts and factor them out into separate velocity file(s). Any files that needs those parts can then import them with `#parse` directive. The `#parse` script element allows the template designer to import a local file that contains VTL. Velocity will parse the VTL and render the template specified.

## Template inclusion 
Apache Velocity, as well as most other templating languages, offer a way to reuse templates.

:::info
Template reuse may come under the name of template reuse, or template inheritance, or template inclusion. It means the ability to embed part of a template into another one.
:::

Let's look at `employers.vm`:

```html
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>List of employers</title>
</head>
<body>
    #if ($employers)
    <h1>List of all employers:</h1>
    <div class="divContents">
        <ol>
            <p>
                #foreach($em in $employers )
                    <li>
                        <i>$em.name</i> is a ($em.sector) company: $em.summary.
                    </li>
                #end
            </p>
        </ol>
    </div>
    #end
</body>
</html>
```

This is a very small file, but still there are parts that are going to be repeated in any other template files we will write later. So, let's create
a new file `src/main/resources/public/templates/top.vm` with the following content:


```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>$title</title>
</head>
<body>
```

Next, create `src/main/resources/public/templates/bottom.vm`:

```html
</body>
</html>
```

Finally, update `src/main/resources/public/templates/employers.vm` as follows:

```html
#set( $title = "Employers List" )
#parse("public/top.vm")

#if ($employers)
    <h1>List of all employers:</h1>
    <div class="divContents">
        <ol>
        <p>
            #foreach($em in $employers )
                <li>
                    <i>$em.name</i> is a ($em.sector) company: $em.summary.
                </li>
            #end
            </p>
        </ol>
    </div>
    #end
#end

#parse("public/bottom.vm")
```

As you can see, we are importing `top.vm` and `bottom.vm` into `employers.vm`. Also, pay attention how "title" varibale is "set" in `employers.vm` and used in `top.vm`. 

Rerun `Main.main` again and make sure our _refactoring_ has not introduced any error; everything must work as before!