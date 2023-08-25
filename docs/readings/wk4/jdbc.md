---
id: jdbc
title: The Java Database Connectivity (JDBC) API
sidebar_label: The Java Database Connectivity (JDBC) API
---

Java Database Connectivity (JDBC) is an application programming interface (API) which defines how a client may access a database. JDBC is like a bridge between a Java application and a database.

![](../../../static/img/jdbc.png)

The `sqlite-jdbc` library (which we've added as a dependency) includes both the (SQLite) database system and its JDBC driver[^1] (to connect JDBC to the database).

[^1]: JDBC is a set of interfaces; the interfaces are implemented by a database vendor's JDBC driver class. When you add the dependency for a database, it typically includes an application or data server as well as a JDBC driver that assists you to connect to the database in your Java application. 

It is very easy to connect to a SQLite database: 

```java
import java.sql.DriverManager;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) throws SQLException {
        final String URI = "jdbc:sqlite:./JBApp.db";
        Connection conn = DriverManager.getConnection(URI);

        // do something with the connection

        conn.close();

    }
}
```

The application above will connect to a SQLite database file `JBApp.db` (it will create it if it does not exist).
When creating a *connection*, you provide an argument that specifies the database that you want to connect to. This argument is called a **Universal Resource Identifier (URI)**. A URI includes the application interface (`jdbc`), the RDBMS (`sqlite`), where to find the database (the host and path, `./JBApp.db` in the aforementioned example), and any other connection parameters required (such as login details). Note: different parts of URI is separated by a colon.

:::tip Common problems
When you run the code above, typically, if you get an error, it will be something like this:
`Exception in thread "main" java.sql.SQLException: No suitable driver found`. 
Make sure `sqlite-jdbc` library is added to your application, check for spelling mistakes and that it has the right path. 
Also, [stackoverflow](https://stackoverflow.com/search?q=sqlite+jdbc+driver+installation) is your troubleshooting friend!
:::