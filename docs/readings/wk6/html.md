---
id: html
title: HTML
sidebar_label: HTML
---

Tags and attributes are the basis of an HTML page. Tags are used to indicate or mark up the start and end of an HTML element. Tags come inside
angle brackets. To close a tag, we need to add `/` before the tag name. For example, `<h1>` is a tag used to produce a heading title with large size on the page, e.g. `<h1>This is a large title</h1>`. Tags can be nested, but must be closed in order in which they were opened, e.g. `<strong><em>This is an important note!</em></strong>`

Attributes go inside tags and provide additional information/settings about the tag, e.g. in `<img src="mydog.jpg" alt="A photo of my dog."></img>`, `img` is the tag and `src` `alt` are its attributes: `src` is the location of the image to be loaded into the page and `alt` specifes an alternate peice of text in case the image cannot be loaded. You can open and close a tag at once: e.g. in `<img src="mydog.jpg" alt="A photo of my dog." />`

### Main parts of an HTML page

An HTML page typically starts with `<!DOCTYPE html>` indicating that this is a HTML5 (i.e. version 5) page. An HTML page can be broken down into two main parts: `head` and `body`. The title of page is set in the head part, and it contains meta data about the page and information that can be useful for search engines. `body`, not so surprisingly, contains the page content. This is what we had for front page of `JBApp`:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>$title</title>
</head>
<body>
<h1>Welcome to JBApp</h1>
<div class="divContents indexLinkWrapper">
    <p><a class="content indexLink" href="/employers">Show all employers</a></p>
    <p><a class="content indexLink" href="/addemployer">Add an employer</a></p>
</div>
</body>
</html>
```
:::tip Learn HTML
To learn more on HTML, [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML) and [w3schools](https://www.w3schools.com/html/) are great resources.
:::