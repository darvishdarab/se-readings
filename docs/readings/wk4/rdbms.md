---
id: rdbms
title: Relational Databases
sidebar_label: Relational Databases
---

For simple applications, it is fine to persist data - to store stuff - directly to disk as text files. 
However, when building larger applications, in particular for use by more than one person, file-based persistence can cause problems:

* sharing can cause data loss or lead to security problems
* having multiple files can result in data redundancy and inconsistency
* querying files is difficult in particular in case of concurrent access

The solution is to use a _database_ (together with a Database Management System).

:::info What is a database?
A database is a shared collection of related data.
:::

:::info What is a Database Management System?
Database Management Systems (DBMS) provide a convenient environment to create, secure and maintain databases. Moreover, DBMS provide an API for users to (efficiently) retrieve and store information from/to database.
:::


A **relational database** is a data model that stores the data as "a collection of inter-related *relations* (or **tables**)."
It is, probably, the most popular and widely used _type_ of database.[^1] 
The relationship between data (which is captured by the relationship between tables) is a kind of meta-data (data about data) which further adds value to the application of this data model.

[^1]: Other database types are often referred to as [NoSQL databases](https://en.wikipedia.org/wiki/NoSQL).

:::info Table
Relational databases are made up of tables. A table is a collection of related data held in a tabular format where
* Each row is unique and represents a _record_.
* Each column has a unique name and represents an _attribute_.
* Column values are of the same kind.
* The sequence of columns/rows is insignificant.
:::

## Relational Database Management Systems (RDBMS)

RDBMS are software services that facilitate working with relational databases. Over the decades, many RDBMS have been developed for different uses. Each BDMS is tuned to best provide certain features (such as performance, scalability, simplicity, etc.).
Every RDBMS provides an application programming interface (API) for user to work with the database. The API is commonly in form of a querying language that conforms (in most parts) to the standard [Structured Querying Language (SQL)](https://en.wikipedia.org/wiki/SQL).

:::info
For brevity, from this point on, I use the term "database" to refer to a (relational) database together with its (R)DBMS application (server).
:::

## SQLite

SQLite is a simple database which can store all its tables in one file on the disk - so let's use it! You can install it (add it as a dependency to your project) by adding the following line to the `dependency` block in `build.gradle` file:

```groovy
implementation group: 'org.xerial', name: 'sqlite-jdbc', version: '3.32.3'
```