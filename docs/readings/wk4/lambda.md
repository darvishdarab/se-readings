---
id: lambda
title: Lambda expressions
sidebar_label: Lambda Expressions
---

## Setting the scene: anonymous classes!

Lambdas are anonymous functions. They were added to Java since Java 8 was released. Lambdas can be used in any place a Single Abstract Method was used before.

Let's showcase the use of Lambdas through a demo.

```java
@SuppressWarnings("All")
public class LambdaDemo {

  public static void main(String[] args) {

  }

  private static List<Employer> getSampleEmployers() {
    List<Employer> employers = new ArrayList<>();
    employers.add(new Employer("Boeing", "Aerospace", "The world's largest aerospace company!"));
    employers.add(new Employer("Netflix", "Tech", "One of the world's leading entertainment services!"));
    employers.add(new Employer("Target Inc.", "Retail", "A general merchandise retailer!"));
    return employers;
  }
}
```

We start with using anonymous inline classes.

```java
private static void usingAnonymousInlineClass() {
    List<Employer> emplyers = getSampleEmployers();
    Collections.sort(employers, new Comparator<Employer>() {
        @Override
        public int compare(Employer e1, Employer e2) {
            return e1.getName().compareTo(e2.getName());
        }
    });

    for (Employer e: employers) {
        System.out.println(e);
    }
}

```

Call `usingAnonymousInlineClass` in `main` and it must print out the sample employers sorted by name.

## Lambda expression

An interface that only has one unimplemented abstract method is called _functional interface_ in Java. In the example we saw above, `Comparator` is a functional interface as it only has one unimplemented asbstract method named `compare` that any _implementing class_ must implement. We can use lambda expressions since Java 8 to implement a functional interface. In other words, we can just directly provide an implementation for the abstract method wherever a functional interface is expected. Alright, let's do the same thing we did above this time with a lambda function!

```java
private static void usingLambdaInLongForm() {
    List<Employer> employers = getSampleEmployers();
    Collections.sort(employers, (Employer e1, Employer e2) -> {
        return e1.getName().compareTo(e2.getName());
    });

    for (Employer e: employers) {
        System.out.println(e);
    }
}
```

The following is **syntax sugar** for anonymous inline implementation of `Comparator`.

```java
(Employer e1, Employer e2) -> {
    return e1.getName().compareTo(e2.getName());
}
```

You've used syntax sugar before: the _enhanced for loop_ is syntax sugar for looping through the use of an iterator:

```java
Iterator<Employer> it  = employers.iterator();
while (it.hasNext()) {
    Employer e = it.next();
    System.out.println(e);
}
```

Bak to Lambdas, let's simplify our lambda expression:

```java
private static void usingLambdaInShortForm() {
    List<Employer> employers = getSampleEmployers();
    Collections.sort(employers, (e1, e2) -> e1.getName().compareTo(e2.getName()));

    employers.forEach(employer -> System.out.println(employer));
}
```

:::tip
* You don't need to specify the data type of arguments.
* When the body of your lambda function is a single statement, you can eliminate the `{` `}` and the `return` keyword.
:::

Also note the use of `forEach` method:

```java
employers.forEach(employer -> System.out.println(employer));
```

:::info References
* [Lambda Expression](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)
* [Functional Interface](https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html)
:::