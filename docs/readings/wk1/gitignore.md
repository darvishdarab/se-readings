---
id: gitignore
title: .gitignore
sidebar_label: .gitignore
---

A `.gitignore` file specifies intentionally untracked files that Git should ignore. You can manually create a `.gitignore` file (notice the leading dot) in the root of your Git repository and list the files and folders to be ignored in separate lines.

Generally speaking, you should not add these four types of files into your Git repository:

* Files that don't belong to the project like `.DS_Store` (for Mac OS), `Thumbs.db` (for Windows).
* Files that are automatically generated like those in build folder.
* Libraries (depends on the situation) like those in .gradle folder.
* Credentials and secretes 

For instance, a `.gitignore` file may look like this:

```
.gradle
build
.DS_Store
__MACOSX
```

:::tip
You can use [this](https://www.toptal.com/developers/gitignore) online tool to generate `.gitignore` for different operating systems, project environments, etc.
:::
