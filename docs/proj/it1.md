---
id: it1
title: Iteration 1
---

## Overview

These are the deadlines for this iteration. Note the different dates and times for different items:

|         | Day | Date         | Time     |
| ------- | --- | ------------ | -------- |
| Upload Requirement Specifications (SRS) | WED | 10/05  |  4:00 PM   |
| Upload UML Class Diagram | WED | 10/05 | 4:00 PM |
| Create Project Planning | WED | 10/05 | 4:00 PM  |
| Deliverable (source code of a working app) | WED | 10/05 | 4:00 PM |


### Software Requirement Specification (SRS)

In your group repo, you must create a folder named `docs` under which you'll save all documentations of your project. Create a subfolder named `srs` inside `docs` and save the `srs_it1.md` in there. 

:::info
If you do not have an update on your SRS since iteration 0, then you can just copy over what you had as `srs_it1.md`.
:::


### Class Diagram

Create a separate sub-folder within `docs` folder named `design`. Add image file(s) named `class_diagramX` under the `docs` folder (X being 1, 2, 3, ...). Use any common image format you like e.g. jpg, jpeg, png, bmp etc. The image(s) should provide the UML class diagram of your project (using standard UML Class Diagram notations). This does not have to be complicated for now. Start Simple! You will refine/enhance this as you make progress through the iterations. Though, while designing your system, have in mind good design characteristics that we talked about in class: [_high cohesion_](../readings/wk2/cohesion) and [_low coupling_](../readings/wk2/coupling), as well as [SOLID design principles](../readings/wk2/dp)

:::caution
The class diagram image file(s) must be uploaded in your repo under `docs/design` folder; do not link images!
:::



### Project Planning: Github Project Board

Once you have yor SRS ready, you want to select the user story or user stories you aim to finish in iteration 1. Do not challenge yourself to accomplish more than you can (especially in this first iteration), but do not make it too trivial either. It might not be straightforward to have a correct estimation of how much you can accomplish in iteration 1 as a team, but that is Okay)! You are just getting started; in future iterations it will probably be easier!

Once you select the user story or user stories you want to do in iteration 1, break each user story into meaningful tasks that must be finished to deliver that user story. This is essentially a divide and conquer step where you break down the problem (user story) into smaller more manageable pieces. Having a list of specific tasks should help facilitate the teamwork; once you have a list of tasks for a user story, you can decide who (in the group) does what subset of the task list. Aside from user-story-based tasks, you may include other tasks too e.g. design tasks, testing/debugging tasks etc.

(Re-)read [Github Project Board](../readings/wk1/board) reading assignment if you have not already, as you will need to plan out your tasks using Github Project Board. Open your project repo on Github, open `Project` tab, and create a new project named [`Project Backlog`](../readings/wk1/backlog). Leave `Template` as `None`, as this allows for more flexibility. Create four columns: 1) "Backlog" with _preset_ `None`, 2) "It1-To Do" with _preset_ `To do` 2) "It1-In Progress" with _preset_ `In Progress`, and 3) "It1-Done" with preset `Done`. You will need to keep the columns updated as you make progress through the iterations. The `Backlog` column is essentially a master list of user stories; each user story makes a card in this column. The other three columns help you keep track of iteration 1 tasks. List all your _to do_ tasks extracted from the user story or user stories you plan to finish for iteration 1 under the "It1-To Do" column. When you start working on a task, move it under the "It1-In Progress" column, and when it is completed move it over to the "It1-Done" column.

:::tip
You do not need to have a long list of tasks to complete for iteration 1. Aim low and hit! Pick one or two simple user stories, create a list of tasks to deliver those user stories and get to work! Also, all team members should get into the habit of leveraging Github Project Board to document your work progress as a team.
:::

:::danger Important Note
It is **very important** to focus on delivering the *"core"* (i.e., must have) features of your app first. Do not do nice-to-have user stories in the first few iterations; you will have time for them later. In iteration 1, aim to deliver the most important/core feature of your app. If it is too big, break it down into multiple smaller user stories (do not forget to update SRS and Github board columns if you do so) and try to finish one or two of those smaller pieces. Implementing a "Login" functionality is not considered a core feature of any applications!
:::


:::tip
Note there is not necessarily a one-on-one mapping between a user story and a task. To implement a user story, you might need to complete a number of tasks, or a task might serve more than one user story, or might not even be related to any particular user story. Use your "iteration" columns for the _tasks_ that are actively on your project's radar in the current iteration.
:::

:::tip
It is a good idea to connect/convert your project cards to Github issues, but it is not a requirement. At minimum you need to have the three columns and they must be kept updated at all times.
:::

### Implementation

Aim to finish at least one user story by the end of Iteration 1 (Wed **10/5** **4 PM**). At the end of iteration 1, you must deliver a software that does what you have listed in the backlog. Break things down and each person in the group must be responsible for a number of tasks.

### General Tips

* Be a team player. 
* Commit/push often. 
* Make use of Git branching: There are different branching strategies so you might want to do a bit of research on this. At minimum, you want to separate out "Main" and "Develop" lines of work. Only when a feature is completed and works on the "Develop" branch it should be merged into "Main". 
* Communicate with your teammates.
* Communicate with your advisor.
* Keep your project backlog current.
* Keep your SRS current and in-sync with project board/backlog.
* Keep your design (class diagram) current and in-sync with project board & SRS.
* Don't forget to have fun! :)


:::caution
You must include a `README.md` at the top level of your project folder that serves as your app's project. When your team repo was created, a template `README.md` was created automatically in your repo. You must stick with that template and fill in its different sections as much as you can.
:::

:::tip
Write xUnit tests for your implementations as much as you can. We will not require you to write tests, but writing tests are strongly recommended.
:::

### Submission

:::danger Submission
We will consider your last commit (i.e. last push to your group repo) by **Wed 10/5 4 PM** as your submission for this iteration.
:::

:::caution Gradescope submission not needed!
You do not need to submit to Gradescope for iteration submissions. We use Gradescope for homeworks only.
:::

