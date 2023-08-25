---
id: dao
title:  CRUD operations in Data Access Object (DAO)
sidebar_label: CRUD operations in data access Object (DAO)
---

CRUD stands for create, read, update, and delete. It refers to the common tasks you want to carry out on a database. Data access object (DAO) is a design pattern that follows high cohesion (and single responsibilty) principle and is used to abstract away data persistence operations from the rest of the application. You can read further about it [here](https://en.wikipedia.org/wiki/Data_access_object).

:::info Quote from [Wikipedia](https://en.wikipedia.org/wiki/Data_access_object#Advantages)
The primary advantage of using data access objects is the relatively simple and rigorous separation between two important parts of an application that can but should not know anything of each other, and which can be expected to evolve frequently and independently. Changing business logic can rely on the same DAO interface, while changes to persistence logic do not affect DAO clients as long as the interface remains correctly implemented.
:::


<!-- ![](assets/modelWithCourse.png){: style="height:250px;width:250px"} -->
<!-- ![](assets/modelWithCourse.png) -->

You can easily implement DAO pattern by hand, but many of the ORM technologies support DAO pattern within themselves. Next, we will look at one such API!