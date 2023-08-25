---
id: singleton
title: Singleton
sidebar_label: Singleton
---

:::info Singleton
**Singleton** is a _creational_ design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
:::

:::tip
Singleton pattern is useful when it makes sense to only have on instance of a class. For example, when working with a database or even a text file, oftentimes it is advised to only work with one single connection instance to avoid incosistencies and issues that could arise when multiple instances access the same resource. Aside from this, Singleton pattern is resource friendly, meaning that by creating only one instance, we do not waste memory for a new object when we actually do not need a new one. It also provides more flexibility in the sense that the class itself controls the instantiation process, so the class instantiation process can be adjusted/modified in one place.
:::


The most common way to implement the pattern follows:

```java
public final class Singleton {

    private static final Singleton INSTANCE = new Singleton();

    private Singleton() {}

    public static Singleton getInstance() {
        return INSTANCE;
    }
}
```

The code sample above provides the following pattern:

* Make the default constructor private, to prevent other objects from using the `new` operator with the Singleton class.
* Create a `static` _creation method_ that acts as a constructor. 


Singleton design pattern is used in core java classes, for example [`java.lang.Runtime`](https://docs.oracle.com/javase/8/docs/api/java/lang/Runtime.html). 

:::info Quote Form JDK Documents
Every Java application has a **single instance** of class `Runtime` that allows the application to interface with the environment in which the application is running. The current runtime can be obtained from the `getRuntime` method.
:::

An application cannot create its own instance of this class.


```java hl_lines="8"
/**
 * Runtime class can be used to get the memory used by a Java applications.
 */
public class RuntimeDemo {
    private static final long KB = 1024;

    public static void main(String[] args) {
        Runtime runtime = Runtime.getRuntime();
        long startMemory, endMemory, netMemory;
        
        startMemory = runtime.totalMemory() - runtime.freeMemory()
        // run some application
        endMemory = runtime.totalMemory() - runtime.freeMemory();

        netMemory = endMemory - startMemeory;
        System.out.printf("Application used %d kb memory.\n", 
            netMemory / KB);
    }
}
```

The `Runtime.getRuntime();` essentially does what `Singleton.getInstance();` does.

:::info When to use this pattern?
Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program; a single _logging_ object, hardware drivers' objects, etc.
:::

:::tip Advantage
You can be sure that a class has only a single instance. Moreover, you gain a global access point to that instance.[^1]
:::

[^1]: Unlike global variables that are unsafe (since any code can potentially overwrite the contents of those variables and crash the app), the Singleton pattern lets you safely access some object from anywhere in the program; it protects the single instance from being overwritten by other code.