---
id: code_reflect
title:  A Reflection on Implementation
sidebar_label: A Reflection on Implementation
---

Recall how we need to fill in the attributes one by one using `PreparedStatement`:

```java
Employer em = new Employer ("Nestle", "Food/Drink", "");
sql = "INSERT INTO Employers (id, name, sector, summary)" +
      "VALUES (NULL, ?, ?, ?);";
PreparedStatement pst = conn.prepareStatement(sql);
pst.setString(1, em.getName());
pst.setString(2, em.getSector());
pst.setString(3, em.getSummary());
pst.execute();
```
The above peice of code is, in a way, a *mapping* between an `Employer` object and a **record** in the `Employers` table. 

To map an object into a record, it requires some work to _get_ the value of each attribute and _set_ it in the corresponding column in the table. Imagine if `Employers` had many more fields; it seems like there must be a better way to map an object into a record (in a relational database); someone must have had this problem and thought of writing a library to solve this problem (at least as long as the fields - in a class - correspond directly to the columns in a table)! 

Well, you will not be surprised to learn there exist libraries called **Object Relational Mapping (ORM)** to solve this problem. We will next explore a simple ORM called Sql2o. 

:::info
Inserting instance field values one by one into a SQL query is not only mechanical, but also fragile. If we add a new field to the `Employer` class, we need to modify the above parameterized statement to accommodate for the newly added parameter.
:::
