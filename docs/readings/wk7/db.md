---
id: db
title: Database in the cloud
sidebar_label: Database in the Cloud
---

## Heroku does not play well with SQLite

:::info
SQLite is serverless, runs in memory, and backs up its data in small files on disk that are easily created and moved around. While easy to use, SQLite is not intended as a _production grade_ database. In particular, SQLite will not play well with Heroku because Heroku uses _an ephemeral filesystem_; you can write to it, and you can read from it, but the contents will be cleared periodically. If you were to use SQLite on Heroku, you would lose your entire database at least once every 24 hours!
:::

## PostgreSQL database

Heroku provides production grade [PostgreSQL](https://www.heroku.com/postgres) databases as a service. PostgreSQL database can be used by any language and framework, and it is very easy to connect your Java App to it; 
you'll need to change your JDBC driver but probably not much else.

:::tip
Even though SQL is the standard language to use with SQL-based relational databases such as SQLite, PostgreSQL, MySQL etc., each of these DBMSs may have its own _dialect_ of SQL. This at times may affect how you would need to write/set up your SQL queries. 
:::


First, add the JDBC driver for PostgreSQL to your project dependencies: 

```groovy
implementation 'org.postgresql:postgresql:42.2.17'
```
Also, add `SQLite` as follows (in case the app is run locally):

```groovy
implementation 'org.xerial:sqlite-jdbc:3.32.3.2'
```

Let's write a sample code to demonstrate the process of connecting to Heroku Postgres. Here is the `main` method from last reading; I added a call to `workWithDatabase()` at the end:

```java
public static void main(String[] args) {
    port(getHerokuAssignedPort());
    get("/", (req, res) -> "Hi Heroku!");
    workWithDatabase();
}
```

Here is the implementation of `workWithDatabase()`:

```java
private static void workWithDatabase(){
    try (Connection conn = getConnection()) {
        String sql = "";

        if ("SQLite".equalsIgnoreCase(conn.getMetaData().getDatabaseProductName())) { // running locally
            sql = "CREATE TABLE IF NOT EXISTS employers (id INTEGER PRIMARY KEY, " +
                    "name VARCHAR(100) NOT NULL UNIQUE, sector VARCHAR(100), summary VARCHAR(10000));";
        }
        else {
            sql = "CREATE TABLE IF NOT EXISTS employers (id serial PRIMARY KEY, name VARCHAR(100) NOT NULL UNIQUE," +
                    " sector VARCHAR(100), summary VARCHAR(10000));";
        }

        Statement st = conn.createStatement();
        st.execute(sql);

        sql = "INSERT INTO employers(name, sector, summary) VALUES ('Boeing', 'Aerospace', '');";
        st.execute(sql);

    } catch (URISyntaxException | SQLException e) {
        e.printStackTrace();
    }
}
```

The `workWithDatabase` is a very simple example of using JDBC to (1) establish a _Connection_ to a SQL database and (2) execute two SQL statements to create a table and insert a record into it. 

:::tip
In the above code, note how we first decide which DBMS we are working with (SQLite or PostgreSQL) to set up our table creation accordingly; [`serial`](https://www.postgresql.org/docs/9.1/datatype-numeric.html) is Postgres way of creating an _autoincrement_ integer column.
:::

Note the use of `getConnection()` method; here is the implementation for it:

```java
private static Connection getConnection() throws URISyntaxException, SQLException {
    String databaseUrl = System.getenv("DATABASE_URL");
    if (databaseUrl == null) {
        // Not on Heroku, so use SQLite
        return DriverManager.getConnection("jdbc:sqlite:./JBApp.db");
    }

    URI dbUri = new URI(databaseUrl);

    String username = dbUri.getUserInfo().split(":")[0];
    String password = dbUri.getUserInfo().split(":")[1];
    String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':'
            + dbUri.getPort() + dbUri.getPath() + "?sslmode=require";

    return DriverManager.getConnection(dbUrl, username, password);
}
```

When we were working with SQLite, we used a URI like `jdbc:sqlite:./JBApp.db` to instantiate a JDBC connection in your code. Heroku puts the URI of the PostgreSQL database in a _environment variable_ `DATABASE_URL`. We can directly get the `DATABASE_URL` in code. 
The `DATABASE_URL` for the Heroku Postgres follows the below convention:

```plain
postgres://<username>:<password>@<host>:<port>/<dbname>
```

However, the Postgres JDBC driver uses the following convention:

```plain
jdbc:postgresql://<host>:<port>/<dbname>?user=<username>&password=<password>
```

The code in `getConnection()` converts the Heroku `DATABASE_URL` into a JDBC URI.

:::caution
The example above uses SQLite when you are not on Heroku and PostgreSQL database when you are on Heroku. This is only for demonstration purposes. **It is important that you use the same database in production as in development.** So, if you are going to deploy your app on Heroku, you will need to install the PostgreSQL database locally. You can download and learn about Postgres [here](https://www.postgresql.org/download/).
:::


## PostgreSQL Add-on

Before you deploy your app to Heroku, you need to create the Heroku Postgres add-on for your app using the Heroku CLI; open the terminal at the root directory of your Java project and type the following command:

```shell
$ heroku addons:create heroku-postgresql
```

## Deploy

Finally, run the following command to deploy your app:

```shell
$ ./gradlew build deployHeroku
```

To checkout the Postgres database provisioned for your app (and its content) you can use Heroku CLI. Learn more on this [here](https://devcenter.heroku.com/articles/heroku-postgresql#using-the-cli). Alternatively, install PostgreSQL locally and connect it to Heroku Postgres following the instructions [here](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup). Finally, if you only want to have a GUI-based front-end to your Heroku's database, I would suggest [pgweb](http://sosedoff.github.io/pgweb/).

