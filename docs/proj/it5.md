---
id: it5
title: Iteration 5
---

## Overview

:::info Iteration 5 goal
By the end of this iteration, you will release the **Beta Version** of your software application. Also, you should continue to have the latest version of your app deployed online. Finally, all group members must collaboratively finish a **code review** process (details below).
:::

:::tip Beta_ release?
A Beta phase begins when the software is feature complete (all must-have requirements are implemented). You must polish the user interface, improve the performance and fix the known bugs.[^1] 
:::

The process of delivering a beta version to the users is called beta release. It is typically the first time that the software is available outside of the organization that developed it. Beta version software is useful for demonstrations and previews to prospective customers. In fact, it is often referred to as a _preview release_ or _early access_. 

[^1]: In real-world, the beta-release software is likely to contain a number of known or unknown bugs 

These are the deadlines for this iteration. 


|Component                           | Date         | Time     |
| ---------------------------------- | ------------ | -------- |
| Retrospective for iteration 4 | Friday Nov 19th | 11:00  PM |
| Updated Software Requirement Specification   | Friday Nov 19th | 11:00 PM |
| Updated Class Diagram | Friday Nov 19th | 11:00 PM |
| Code Review Deliverable | Thursday Dec 2nd | 11:00 PM |
| Deliverable (source code of a working app) | Monday Dec 6th | 11:00 PM |
| Individual Contribution Report | Monday Dec 6th | 11:00 PM |
| Final retrospective | Monday Dec 6th | 11:00 PM |


:::caution Practice Presentation
To prepare you for the final presentation, we ask you to perform a practice presentation, **after** this iteration is over, on **Thursday Dec 2nd** (see [course schedule](https://docs.google.com/spreadsheets/d/13YOLjA4aDZ47OyfB4tmESu2wtNjaIQc1vjQgUwA_Bv8/edit#gid=0)). Instructions on the (dry-run) presentation will be posted later.
:::

### Retrospective for iteration 4

You **must** write a _Retrospective_ for iteration 4. The retrospective is an opportunity for your team to inspect itself and create a plan for improvements to be enacted during the next iteration. Review what you had done in iteration 3; note things that you have and have not delivered, note the challenges you had, and reflect on how you shall proceed in the next iteration to do a better job. There is not specific format to the retrospective document and no minumin and/or requirements on its length, format etc. It is just meant to reflect on iteration 3 and use it to improve your next iterations. Write this in a file named `retrospective_it4.md` and upload it under `docs` folder in your group repo.

### Update Software Requirement Specification

You only need to update the Requirement Specification Document if you want to make any changes to the specification of your proposed software project. That is, you can leave it as is, if you are happy with it.

### Update Class Diagram

If there has been been any changes to your desgin since last iteration, make sure to update your class diagram to reflect the latest design of your software. Upload a new class diagram picture to the `docs` folder. Make sure to include `it5` in the file name(s) e.g. _`it5_class_diagram1.png`_

:::tip
Remember that your class diagram must be kept updated at all times. (i.e. iterations)
::::

### Project Planning: Giuthub Project Board

Similar to previous iterations, create three columns "It5-To Do" with _preset_ `To do`, "It5-In Progress" with _preset_ `In Progress`, and "It5-Done" with preset `Done`. You will need to keep the colmuns updated as you develop your app further. List all your _to do_ tasks extracted from the user stories you plan to finish for iteration 5 under the "It5-To Do" column. When you start working on a task, move it under the "It5-In Progress" column, and when it is completed list it under the "It5-Done" column. 

:::tip 
Ideally, you do not have any unfinished tasks from previous iterations. But, if there are unfinihsed tasks, move them over to the _it5_ columns and aim to get them done in this iteration.
:::

:::caution If you are behind ...
If you are behind in delivering the must-have features, please consider moving those into nice-to-have and instead polishing/debugging/improving what you already developed. The exception to this case is for the _core_ must-to-have features which their lack of would severely impact the usability of your application. In the latter case, you must continue working on delivering those (core) features.  
:::

### Code Review

:::tip From Wikipedia
Code review (sometimes referred to as peer review) is a software quality assurance activity in which one or several people check a program mainly by viewing and reading parts of its source code, and they do so after implementation or as an interruption of implementation.
:::

:::tip
Typically (and ideally), code review is done by someone who is NOT the code author. Code reivew is very effective and is standard activity in the industry; no code can be integrated/merged into the code-base before being reviewed (and approved) by one or more colleague(s) or supervisor(s).
:::

In this last iteration, you are going to get a sense of code review  by going over your entire code-base and improve its quality. All team members must be involved and contribute to the code review process: 

* **Design**: Is the code well-designed and appropriate for your system? Think of all design principles and patterns that you've studied in this course. You may need to _refactor_ the code.
* **Complexity**: Could the code be made simpler? Would another developer be able to easily understand and use this code when they come across it in the future?
* **Tests**: Does the code have correct and well-designed automated tests? 
* **Naming**: Did the developer choose clear names for variables, classes, methods, etc.?
* **Comments**: Are the comments clear and useful?
* **Style**: Does the code follow good programming practices?
* **Documentation**: Is there a documentation on how to install and run the application?

You must check for and perform as much improvments/refactorings as you can to your code-base based on the above-mentioned items. Once done, you need to write a short "code review" report and list all the improvements and refactorings you have made to your code. You also need to include details who has done what (as far as code-review-related activities go). Write the report in `code_review_report.md` and upload it under the `docs` folder in your group repo. There are no hard requirements on the format/length of this report; this part is more about actually doing a thorough and effective code review, but make sure the mentioned items along with enough detailed explanations are included in the report.

:::tip
For this part, in paricular, try to really contemplate and reflect on your software design in the context of SOLID design principles as well as the design patterns we have discussed in class. Then, based off of your findings, apply as many refactorings as you can to enhance your code internal structure.
:::


### Final Deliverable 

At the end of iteration 5, **you must deliver the Beta Version of your software application**.

The latest version of your deployed application must also be available online.

You must always keep your group repository updated with the latest changes; we will consider your **last commit by Monday, Dec 6th, 11:00 PM EST as your submission.**

:::caution
Do not forget to update you project's `README.md` based on your progress/updates in iteration 5. Clean up your readme file to contain a description of your app, how to install the app and how to run/access it, and how to use the app's main features. Have separate sections for each of these items and feel free to include snapshots of the app in action showing how to access/use its various parts/functionalities.
:::

### Individual Contribution Report

Each member in the team must write a short individual report. This must be done _individually_, hence the name individual report!; you may not work on this together. This does not have to be long and there are no hard requirements on the format, length, content etc. of this document. However, you should use this to 1) reflect on your own individual performance over **all** iterations, and 2) mention the names of any particular member(s) who you think excelled in your group. 

:::info
This should not be the case hopefully, but if you have had major concerns about performance of any other member(s), make a mention of it in your individual report. Submit your individual report to your personal repo in the `jhu-oose` organization in a file named `final_individual_report.md`.
:::

:::danger submit individual report to your private repo
We have provisioned you a personal repo at the begining of the semester and you must still have access to it (i.e. the repo you used to submit HW1). This is different from your project/team repo that you use to submit your homeworks and other iteration deliverables. **Submit the individual report to your private repo, not the team repo!**
:::

### Final Retrspective

It is similar to iteration retrospectives but you look back over the entire five iterations. In particular, revisit your original project proposal, note on what has changed, what features you have/have not delivered. Briefly note the challenges you have had (and you have overcome/dealt with them). And, finally, reflect on how you would do it again if you could go back in time and start at iteration-1. You don't need a time machine to achieve this. **The next software project you develop, you will start at iteration 1, and I am sure it will be a great one.**

