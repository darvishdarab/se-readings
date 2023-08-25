---
id: gradle
title: Gradle
sidebar_label: Gradle
---

We're going to be doing a quick drive-by of a popular [build automation tool](https://en.wikipedia.org/wiki/List_of_build_automation_software) called [Gradle](https://gradle.org/). 
Build tools are used to automate the process of packaging up and
shipping your code to your users.
When working with teams, it is essential to have a standardized build tool. We are, however, going to narrow our focus on *managing dependencies*. 

When building software applications, often you use tools and libraries written by other developers. These software programs are your application's *dependencies* since your software (or development flow) depends on it. For example, you have used [JUnit](https://junit.org/junit5/) in Data Structures for writing unit tests. JUnit is an open-source program written to facilitate test-driven development in Java. JUnit is a dependency for most homework in the Data Structures course. 

When a dependency that you are using requires another library,
the required library becomes a *transitive dependency*. 
Essentially, what this means to you is that you also rely on that
other dependency. 
As your project becomes larger and the code more complex, you will need a tool to manage all the dependencies. Enters Gradle! 
Now remember that Gradle is first and foremost, a build tool. It does also a great job of managing dependencies. Adding a dependency with Gradle is as easy as adding a line to your _build script_.

The easiest way to create a new project that is all Gradle ready is by using the IntelliJ Gradle template. Follow these instruction on  "[Getting Started with Gradle](https://www.jetbrains.com/help/idea/getting-started-with-gradle.html)" to get a Gradle project up and running. If you have not already installed IntelliJ, please follow the instructions on "[Install IntelliJ IDEA](https://www.jetbrains.com/help/idea/installation-guide.html)" and "[Run IntelliJ IDEA for the first time](https://www.jetbrains.com/help/idea/run-for-the-first-time.html)."

Once done, open the `build.gradle` file in IntelliJ and find the following section:

```groovy
dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.6.0'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine'
}
```

As you have guessed, that two lines inside the `dependencies` _block_ are all it takes to add JUnit to your project. When we later work with [SparkJava](http://sparkjava.com/), for example, to build a RESTful API, we will add the following line to the build script:

```groovy
implementation 'com.sparkjava:spark-core:2.9.3'
```

You might be wondering about the syntax[^1] of Gradle and, for instance, what `testImplementation` and `testRuntimeOnly` mean. We will not cover these in OOSE; if you want to learn more about Gradle, please consult its [documentation](https://docs.gradle.org/current/userguide/userguide.html).

[^1]: Gradle is a domain-specific language, or DSL, that is based heavily on the Groovy programming language. Groovy is a dynamic scripting language that runs on the Java Virtual Machine.