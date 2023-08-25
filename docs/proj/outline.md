---
id: outline
title: Project Outline
---

The purpose of the course project is to provide you with the opportunity to acquire hands-on experience with software development and its practices.
The end goal is not the project itself; rather, the project serves as a vehicle to help you develop your engineering skills. 

The project involves teamwork, which is unavoidable for large-scale software development. Teamwork is difficult but it is a necessary evil to get you ready for your future workplace. 

:::info
You are free to form your team and pick a topic for the course project (as long as the project is approved by the instructor). 
::: 


:::tip Project Topic
There are no limits placed on the topic of the project, but we strongly encourage that you aim for a project that 
* conforms to client-server architecture.
* serves a real purpose, not some hypothetical need that does not exist.
* goes beyond a simple CRUD application.[^1] 
:::

:::danger Project Ideation
For more details how to decide on a project idea read [Project Ideation](ideation).
:::


[^1]: CRUD stands for Create, Read, Update and Delete. Almost all internet consumer-related software are using the core of CRUD; you are using it every time you are asking a database to take your new or existing data and modify it. 
A simple CRUD application is just a front-end (UI) for databases.
Most application frameworks have the concept of CRUD deeply embedded in their toolset, making it **too easy** to get an app up and running in a matter of days with little code that is doing anything else. 
You don't learn much about software engineering if your app is mostly CRUD. You should strive to incorporate some novel algorithms and data structures to go beyond a simple CRUD application. 

## Tools and Frameworks

There are no strict requirements on the software architecture and technology stack, but make sure to pick a set of technologies that would best serve your needs. Certainly talk to your advisor and/or the instructor before making final decisions on these.

:::info
Even though you could possibly argue (based on the specific requirements of your app) for an alternate software architecture, I would strongly recommend adhering to the client-server architecture given the flexibility, ubiquity and popularity of it.
:::


## Iterations
Project development is broken down into a sequence of six **two-weeks-long** (roughly) iterations, starting at iteration 0 which is more succinctly divided into three phases "Team formation", "Project Ideation", and  "Specification & Planning". There is no implementation-related deliverables for iteration 0 but starting with iteration 1, you'll need to start submitting both design and implementation deliverables.

At the onset, you will declare who will be in your project team and propose an initial idea for a topic. You shall follow with requirement gathering, writing user stories, and planning: which user stories will be implemented at each iteration.

When planning your project consider the following guidelines and expectations:

:::info Log in: first thing user does, last thing you implement!
If your software involves user authentication (any sort of log-in system), do **NOT** implement it until iteration 4 or 5! This may seem counter intuitive as most of you would see that as a legitimate starting point. In reality, however, you seldom implement your own user authentication; you almost always use a (reliable) third-party library. Moreover, user authentication is (almost) the same across different applications; it is fair to assume it a trivial non-defining feature of your software application. So, hold off on it until the last iterations.
:::

:::info Ship the core requirements first
If you were to describe your software and you only had one tweet to do it, what would you write? That tweet must get at one (or a few) of the "Must Have" requirements; let's call that subset the **core requirements** of your software project. We recommend that you spend iteration 1, 2 & 3 on shipping the core requirement(s). 
:::

:::info Aim low and hit!!
Aristotle is claimed to have said that "our problem is not that we aim too high and miss, but that we aim too low and hit." That may be true but I'm here to say that's okay for iteration 1. In fact, I encourage you to do exactly that for iteration 1. **Pick one or two easy user stories (among the "Must Have" requirements, except for user authentication) and try to deliver it during the first iteration.** 
:::

:::info First release
By the end of iteration 4, you should ideally have all the "Must Have" requirements done and have successfully launched (deployed) your app. The software generally works but may have some bugs and probably is missing some desired (nice to have) features. Let's call this **first release** of your version 0. Aim for the first release by the end of iteration 4. 
:::

:::info Final release
* During the last iteration, you should clean your code; polish your UI; fix the bugs, patch your software as much as you can, and ideally do some refactoring. We call this Final release.
* Do not add any new feature. If you are lagging behind, this is the time to catch up and recover. If you are ahead, you may add user authentication to your application.
:::

## Presentation
Being a good software developer also means being able to communicate what you did and will do to clients, management, and your peers. The oral presentation component of the projects helps to give you practice in this arena.

There will be two presentations: the first one will be on **week 15** and is considered a "dry-run" for the final presentation which will be during part of the examination period. More information on this will follow.