---
id: dp
title: Design principles
sidebar_label: Design Principles
---


:::info Software is always in a state of flux.
State of flux is like tossing pebbles into water. Each change has ripples. And software always changes like an evolving organism. Ideally the changes are confined and have no adverse consequence. 
:::

A good software design organizes the code in a way that it is "easy to understand, change, maintain and reuse."

:::info Design Principle
Design principles are practical pieces of advice that are applied to designing or writing code to make the code more maintainable, flexible, and/or extensible.
:::

In a small application, poor design is survivable. The problem with poorly designed small applications is that if they are successful, they grow up to be poorly designed big applications.

In this and several next readings, we will set out to learn more about good practices when it comes to software design.

:::caution
It is often said that design cannot be taught but has to be learned through experience. That said, there is always the opportunity to learn from the experience of others. 
:::

Over the years, programmers noticed that some code arrangements made their lives easier while others made them harder. These experiences led them to develop _opinions_ about how to write good code.

Design principles are (often opinionated) guidelines derived from experience of programmers about software design that usually take the form of do's and don'ts. They are the Commandments of OO Programming. 

We have already explored two principles:[^1]

[^1]: See the readings on [Good Enough Design](good_design).

:::tip High cohesion
High cohesion means that the responsibilities of a given element are strongly related and highly focused.
::: 

High cohesion is generally used in support of low coupling. 

:::tip Low coupling
Coupling is a measure of how strongly one element is connected to, has knowledge of, or relies on other elements. Low coupling means lower dependency between the classes.
:::

In the section on [Good Enough Design](good_design), we noted:

:::info 
The path to changeable and maintainable object-oriented software begins with classes that are highly cohesive and loosely coupled.
:::

We now pick up that discussion by introducing a catalogue of design guidelines known as the SOLID principles.

## The SOLID design principles
The SOLID design principles were promoted by [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) and are some of the best-known design principles in object-oriented software development. SOLID is a mnemonic acronym for the following five principles:

* Single Responsibility Principle
* Open/Closed Principle
* Liskov Substitution Principle
* Interface Segregation Principle
* Dependency Inversion Principle

In the following readings, we explore these principles one by one.