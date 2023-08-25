---
id: project_planning
title: Agile Estimating
sidebar_label: Project Planning
---

Suppose your car is broken and you take it to a mechanic. The mechanic runs some 
diagnostic tests and identifies several issues. 
She asks you to leave the car with her for repairs. 
Your immediate response perhaps will be "how long it will take 
and how much it will cost?". What you don't want to hear is "it'll be ready when
it's ready and it'll cost what it'll cost".

As a software developer you too will be in a position to estimate the cost 
and time for developing a software. 

* Your project estimate is the sum of the estimates for your User Stories.
* You should add an estimate to each User Story for how long you think it will take to develop (that is, design, code, test, and deliver) that functionality.

It is hard to estimate the time it will take to develop a user story. As someone 
who is starting this, it may seem impossible to get it right. This is difficult 
(and prone to error) even for experienced developers due to a phenomenon known as the [Planning Fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).

In agile software development, practitioners combat the **Planning Fallacy** by

* Getting estimates from multiple people
* Estimating "effort required" in terms of "ideal days" or "Story Points" 
* Using relative estimates (e.g. _this_ feature requires twice the effort we put for _that_ feature)

:::info Ideal Day
"A unit for estimating the size of product backlog items based on how long an item would take to complete if it were the only work being performed, there were no interruptions, and all resources necessary to complete the work were immediately available."[^1]
:::

[^1]: [https://innolution.com/resources/glossary/ideal-day](https://innolution.com/resources/glossary/ideal-day)


:::tip
In your estimation, you should factor in the time you will spend researching or learning about 
developing a feature.
:::

:::info Story Points
More experience software engineers estimate the effort required as a combination of the complexity of the work and the risk & uncertainty involved in it. They call this estimate "Story Points". 
:::

:::caution 
Story estimates larger than 13 (ideal days) cannot fit into an iteration. You may want to try to break that story into several smaller, more easily estimated stories. 
:::

:::danger Be wary!
If the total estimate of all User Stories in the "Must have" category is much larger than the duration of five iterations, you must make changes (including dropping the project in favor of a smaller one).
:::

# Expectation in OOSE

Here are some general guidelines/expectations about planning your project:

## Ship the core requirements first

If you were to describe your proposed software and you only had one tweet to do it, what would you write? That tweet must get at one (or a few) of the "must-have" requirements; let's call that subset the core requirements of your software project. We recommend that you spend iteration 2 & 3 on shipping the core requirement(s).

## Aim low and hit!

Aristotle is claimed to have said that "our problem is not that we aim too high and miss, but that we aim too low and hit." That may be true but I'm here to say that's okay for iteration-1. In fact, I encourage you to do exactly that for iteration-1. Pick one or two easy user stories (among the "must-have" requirements) and try to deliver it during the first iteration.

## Alpha release

By the end of iteration 4, you should ideally have all the "must-have" requirements. At this stage, the software generally works but may have some bugs and probably is missing some desired but non-essential (nice-to-have) features. Let's call this (Alpha release) or version 0 of your application. Aim for alpha release by the end of iteration 4.

## Beta release

During the last iteration, you should clean your code; polish your UI; fix the bugs and patch your software as much as you can. We call the deliverable of this stage the (Beta release) of your application.

## MVP
At the end of the course, if you were to work for one more iteration, you would be releasing your [Minimum Viable Product or MVP](https://www.productplan.com/glossary/minimum-viable-product/)! The MVP has enough value (features) that customers want to start using it. It also hints at what you will produce in the future to keep customers interested.

:::info
Presentation - Being a good software developer also means being able to communicate what you did and will do to clients, management, and your peers. The oral presentation component of the projects helps to give you practice in this arena.
:::

:::info
There will be two presentations: the first one will be on the last week of classes and is considered a dry run for the final presentation which will be at the final demo (during examination period). More information on this will follow when we get closed to the end of the semester.
:::