---
id: teamrepo
title: Project Repository
---

## Project GitHub Repository
Each team will have a GitHub repository.

:::caution
The state of your GitHub repository, in particular the project-board, `README` file, and `GitHub Pages`, will be a factor in your grade for each iteration.
:::

## Team repository!

:::tip
A team repository has been provisioned to you assuming you have correctly filled out the google form communicated with you earlier and all team members should have admin access to it!
:::


## Setting up your repository
Your first task is to set up the software stack that you have planned on using. You are recommended to create a "Hello world" program using that stack and deploy it. Your Hello world program must cover the entire stack, frontend and backend (API, database, etc.).

Notice the structure of the codebase in this repository!

```plain
├── src
│  
└── docs
└── README.md
```

We are using a single repository for both the backend and frontend applications where all source code code into the `src` folder! It is common to use a single git repository for multiple related applications. Such applications reside in subdirectories of the main repo.

## README
As soon as you created your GitHub repository, you must start updating its top level `README.md` with all the required information. Make sure to fill in all the (sub)sections per specifics of your project work. Having an up-to-date `README` is very important to  have instructions for others (teammates, advisors, etc) to retrace your steps. They must be able, by reading the instructions, to reproduce your work and set up the stack on their machine and deploy it to the production environment. These instructions should be as detailed as possible, including known issues and edge cases, and kept updated throughout this semester.

## GitHub Issues
Most software projects have a bug tracker of some kind. GitHub's tracker is called Issues, and has its own section in every repository. Although it was originally intended to track bugs, Issues are now used to keep track of enhancements, product roadmap, planning, feature requests, etc. GitHub Issues is at the heart of GitHub and acts as a kind of chatroom/forum/email where all members of your team can communicate about your software project.

In OOSE, we will use Issues as bug tracker and for task management. Every task (from Project Documents, Iteration Design & Planning) should be converted into an "issue" and assigned to a team member.

## Branching

Branching is a feature of Git that allows a project to move in multiple different directions simultaneously. There is one main (or master) branch that is always usable, but any number of new branches can be created to develop new features. Once ready, these branches can then be merged back into the main branch.

**You must create a branch for each iteration with the names iter-00, iter-01, iter-02, ...** You don't need to create these branches from start. At each iteration, create its dedicated branch off your main branch. Each iteration branch must contain the progress you made up to the deadline of that iteration. The main must be the same as the latest "completed" iteration. For example, if you are currently in iteration 5, the main branch must be the same as your `iter-04` branch. At the same time, if I were to check, e.g., what you have done in iteration 3, I should be able to find that by checking your `iter-03` branch.

:::danger
Do not delete the `main` or `iteration` branches.
:::

As you develop your app, you incrementally add features to it. For each feature, you must create a branch. (Or make your feature branch off iter-xx branch.) An example branch to work in is `iter-01-backend`. Once you have finished work on your branch create a pull request from your feature branch into the current iteration branch or another feature branch. Example: `iter-01-backend` into `iter-01`.

## Pull Request
A pull request can be made to merge a branch of a repository with another branch of the same repository or even a different repository. Pull requests are a good way to get feedback on changes from collaborators on the same project.

Once you have finished work on your branch create a pull request from your feature branch into the current iteration branch or another feature branch. Example: `iter-01-backend` into `iter-01`. Please do not approve your own pull request immediately. Post in Slack to have your code reviewed. Once at least one and ideally two people reviewed it, address any feedback. Continue this process until your code is approved! Then, merge your branch!

:::tip Code Review

Any reviewer must go over all changes made and provide feedback by accounting for the following factors:

* Design: Is the code well-designed and appropriate for your system? Think of all design principles and patterns that you've studied in this course. You may need to refactor the code.
* Complexity: Could the code be made simpler? Would another developer be able to easily understand and use this code when they come across it in the future?
* Tests: Does the code have correct and well-designed automated tests?
* Naming: Did the developer choose clear names for variables, classes, methods, etc.?
* Comments: Are the comments clear and useful?
* Style: Does the code follow good programming practices?
* Documentation: Are the documentations accordingly updated?
:::

When merging two branches, merge conflicts can arise. It is the responsibility of the person who initiated the pull request to resolve the conflicts.

This GitHub learning lab might be helpful: [Reviewing pull requests](https://lab.github.com/githubtraining/reviewing-pull-requests).

## Merging
When combining different versions of code, e.g. using git pull, a merge conflict can occur if the different versions have different data in the same location. Git will try to take care of merging automatically, but if two users edit, for example, the same line, a merge conflict will have to be manually resolved.

:::info Resolve merge conflict
To resolve a merge conflict, simply locally remove all lines and code that are not wanted and push the results.
:::

When working in a team, it is the responsibility of the person who pushed their code last (and thus triggered the conflict) to resolve it.

This GitHub learning lab may be helpful: Managing merge conflicts.

## Project Board

Make sure to read and follow the steps in [Github Project Board](../readings/wk1/board) section to setup a project board in your team repo!