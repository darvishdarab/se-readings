---
id: sparkjava
title: SparkJava
sidebar_label: SparkJava
---


We will be using a free and open source Java web application development framework called [SparkJava](http://sparkjava.com/) for building our REST API.

You need to add the following to the `dependencies` clause of `build.gradle`:

```groovy
implementation 'com.sparkjava:spark-core:2.9.3'
```

## Run a server locally!

Running SparkJava is as easy as follows!

```java
import static spark.Spark.*;

public class ApiServer {
  public static void main(String[] args) {
    final int PORT_NUM = 7000;
    port(PORT_NUM);
    get("/", (req, res) -> "Hello World");
  }
}
```

After running the `ApiServer`, point your browser to [`http://localhost:7000/`](http://localhost:7000/) to see the following message!

```plain
Hello World!
```

Notice the following statement

```java
get("/", (req, res) -> "Hello World");
```

The `->` is part of **Java's Lambda** syntax. This syntax may be strange to you! If that is the case, read the next section (otherwise skip it).
