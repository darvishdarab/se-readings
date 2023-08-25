---
id: factory
title: Factory
sidebar_label: Factory
---

:::info Factory
**Factory** is a _creational_ design pattern that allows you replace direct object construction calls (using the `new` operator) with call to a special _factory_ method.[^1]
:::


[^1]: Factory, Factory Method and Abstract Factory are all design patterns with subtle differences; the underlying idea of all is to let other objects make objects for you.

You will see this pattern in the [JDBC](https://en.wikipedia.org/wiki/Java_Database_Connectivity) API; `DriverManager.getConnection` is a factory method.

```java hl_lines="6"
import java.sql.*;

public class Main {
  public static void main(String[] args) throws SQLException {
    final String URI = "jdbc:sqlite:./Store.db"; 
    Connection conn = DriverManager.getConnection(URI);

    // do something with the connection

    conn.close();
  }
}
```

![](../../../static/img/factory01.png)


In the example of JDBC API, `DriverManager` creates `Connection` objects (instead of using `new` keyword with `Connection`). So why would we want this? Why not use a constructor to make `Connection` objects? 

Well, under the hood, the `DriverManager` will find the SQLite driver (from the `URI`) and call the `connect()` method of the (SQLite) driver which in turn will return a concrete implementation of `Connection` class (that is, a subclass of the `Connection` class that is specialized to work with SQLite). This eliminates the need for you to specify concrete implementations of `Connection` in your code. "How so?" you ask! Well, read on!

Let's assume the SQLite JDBC driver has a class called `SQLiteConnection` which implements `Connection`[^2]; we could write

```java
Connection conn = new SQLiteConnection("./Store.db");
```

The code above would require us to "know" about (existence and the use of) `SQLiteConnection`, to "import" it in our source code, properly call it (with required arguments), etc. `SQLiteConnection` is then a "dependency" in our code. Using the `DriverManager.getConnection` eliminates this dependency. Moreover, since all `DriverManager.getConnection` takes is a string (`URI`), we can connect to a different database during runtime. 

[^2]: I don't know if there is really a `SQLiteConnection` class but let's assume it is the case for the sake of the example.

:::caution
Using Factory pattern, essentially, the client code asks the _factory_ to make an implementation, and the factory does so. The client code does not decide which implementation to make and therefore it is not coupled to it.
:::

Factory is one of the most widely used java design pattern. Here is another example, again from JDBC:

```java
Statement statement = connection.createStatement();
```

This lets the specific JDBC driver (e.g. SQLite driver) return a concrete implementation of `Statement` from the `connection`. You can just declare it against `java.sql.Statement` interface. 

:::info When to use this pattern?
Use the Factory pattern when you want to provide users of your library or framework with a way to extend its internal components, allowing your clients to decouple their application from concrete implementations of your framework.
:::

:::tip Advantage
Factory pattern removes the instantiation of actual implementation classes from client code. Factory pattern makes client code more robust, less coupled and easy to extend. Imagine properly instantiating an object from a class might depend on creating many other objects first and/or getting certain detialed setting rights before being able to do the instantiation. This is something that must not be left to the client code, because it might not get those right or even lack the knowledge to do them. The factory can serve as a knowledge center for producing objects. Even if it can be argued that the client code can get all those preliminaries, settings and dependencies right and do the instantiation itself, factory pattern moves all those into one separate place preventing duplicate code, in case the client does the instantiation multiple times. Read about [duplicate code](../wk2/refactoring) being a _code smell_.
:::


