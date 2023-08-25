---
id: sql
title: Creating Content Using JDBC and SQL
sidebar_label: Structured Query Language
---

We will interact with relational databases using JDBC and the Structured Query Language (SQL). SQL is a domain specific language designed for updating and retrieving data in table-based databases. We will not cover it in class but you will likely need to use it. SQL is very easy and descriptive. In most cases, a simple Google search will be sufficient to find "how to" do something with SQL. My go-to place to lookup SQL syntax is [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/).


:::tip
If you are interested in learning more, [SQLZoo](http://sqlzoo.net/) is one of the best and popular website for learning SQL online. For general knowledge, checkout [SQL on Wikipedia](https://en.wikipedia.org/wiki/SQL).
:::

Recall, from previous section, that we have created a connection to our SQLite database through JDBC:

```java
final String URI = "jdbc:sqlite:./JBApps.db"; 
Connection conn = DriverManager.getConnection(URI);
```

## Create a table

To create a table, we can execute the following SQL statement:

```sql
CREATE TABLE IF NOT EXISTS Employers (id INTEGER PRIMARY KEY, 
       name VARCHAR(100) NOT NULL UNIQUE, sector VARCHAR(100), summary VARCHAR(10000));
```

Notice SQL reads like English! There is really no need to explain it; is there?!

We can execute a SQL statement by (1) creating a `Statement` object and (2) invoking its `execute` method, passing the SQL statement as an argument to it. 

```
Statement st = conn.createStatement();
String sql = "CREATE TABLE IF NOT EXISTS Employers (id INTEGER PRIMARY KEY, 
       name VARCHAR(100) NOT NULL UNIQUE, sector VARCHAR(100), summary VARCHAR(10000));";
st.execute(sql);
```

