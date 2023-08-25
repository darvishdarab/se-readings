---
id: github
title: GitHub
sidebar_label: GitHub for Project Management
---

Before we get into GitHub, I'm going to emphasize the fact that Git and GitHub are not the same! Git is a version control system, whereas GitHub is a cloud-based platform that hosts Git repositories and facilitates team collaboration. Okay, now let’s get started.

:::tip
You need to create an account on [github.com](https://github.com/) (if you don't already have one).
:::

## What you need to know
We will be using GitHub extensively for this course; to host your projects, as a platform for you to collaborate on, to share starter code and/or other material with you, and to give you feedback on your project work iterations.

You must **understand (and use) the GitHub Flow** which entails:

* Communicating in issues
* Creating branches (for adding/updating features)
* Using pull request to introduce changes
* Merging changes

:::danger TODO
GitHub has a collection of learning resources known as [Learning Lab](https://lab.github.com/). You **must** take and complete [Introduction to GitHub](https://lab.github.com/githubtraining/introduction-to-github) (it is hands-on and takes about half an hour).
:::

In what follows, I provide a summary of useful concepts and commands.

### Remote Repository

Any version of a repository that is not stored locally on a device is called a "**remote**". (So, GitHub is a service for you to host _remote_ repositories). "**Origin**" is used to refer to the "remote" from which the local repository was originally downloaded from.
  
* `git clone <url>`: take a repository stored on a server (like GitHub) and downloads it
* `git push`: push any local changes (commits) to a remote server
    * `push` only after you staged and committed the changes
* `git fetch`: download all of the latest commits from a remote to a local device
* `git pull`: pull any remote changes from a remote server to a local computer

### Merging

When combining different versions of code, e.g. using `git pull`, a **merge conflict** can occur if the different versions have different data in the same location. Git will try to take care of merging automatically, but if two users edit, for example, the same line, a merge conflict will have to be manually resolved.

:::info Resolve merge conflict
To resolve a merge conflict, simply locally remove all lines and code that are not wanted and push the results.
:::

When working in a team, it is the responsibility of the person who _pushed_ their code last (and thus triggered the conflict) to resolve it.

### Branching

Branching is a feature of Git that allows a project to move in multiple different directions simultaneously. There is one `master` branch that is always usable, but any number of new branches can be created to develop new features. Once ready, these branches can then be merged back into `master`.

:::info Info
When working in a Git repository, `HEAD` refers to the current branch being worked on. When a different branch is "checked out", the `HEAD` changes to indicate the new working branch.
:::

:::caution
When merging a branch back into master, there is the possibility for merge conflicts to arise. 
:::

* `git branch`: list all the branches currently in a repository
* `git branch <name>`: create a new branch called `name`
* `git checkout <name>`: switch current working branch to `name`
* `git merge <name>`: merge branch `name` into current working branch (normally `master`)

* `git merge origin/master`: merge `origin/master`, which is the remote version of a repository normally downloaded with `git fetch`, into the local, preexisting `master` branch

:::info
Note that `git pull` is equivalent to running `git fetch` and then `git merge origin/master`
:::

### GitHub Issues

Most software projects have a bug tracker of some kind. GitHub's tracker is called **Issues**, and has its own section in every repository. Although it was originally intended to track bugs, Issues are now used to keep track of enhancements, product road-map, for planning, feature requests, etc. Issues is at the heart of GitHub and acts as kind of chatroom/forum/email where all members of your team can communicate about your software project. 

### GitHub Forks

A "fork" of a repository is an entirely separate repository which is copy of the original repository.
A forked repository can be managed and modified like any other, all without affecting the original copy.

Open source projects are often developed using forks. There will be one central version of the software which contributors will fork and improve on, and when they want these changes to be merged into the central repository, they submit a "pull request".

:::tip
We will not be using forks in this course.
:::

### Pull Request

A pull request can be made to merge a branch of a repository with another branch of the same repository or even a different repository. Pull requests are a good way to get feedback on changes from collaborators on the same project.

:::tip
Forks, issues amd "pull requests" are all GitHub specific features.
:::
