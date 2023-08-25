---
id: oop
title: Object-Oriented Programming
sidebar_label: Object-Oriented Programming
---

In a *[class-based](https://en.wikipedia.org/wiki/Class-based_programming)* object-oriented programming language[^3], like Java, any object must be _an instance of_ a class.

:::info What is an Object?
An object represents an individual, identifiable item, unit, or entity, either real or abstract, with a well-defined role in the problem domain.[^2]
:::

:::info What is a Class?
A class defines the attributes, structure and operations that are common to a set of objects, including how the objects are created. 
:::

[^3]: There are also _prototype-based_ object-oriented programming languages, like JavaScript. 


A class is an **abstraction** or a *model*.

:::info What is a model?
A model is a partial representation of something else (a concept, a system, a pattern, etc.). It helps us to visualize and understand the original and its role in a problem domain. 
:::

:::info 
It has been said that teaching object-oriented programming (OOP) to those with no programming background is easier than those with experience in (procedural or functional) programming.[^1] This is because experienced programmers get used to procedural (or functional) thinking and modeling. On the other hand, for non-programmers, the object-oriented way of decomposing a problem is similar to the way they are used to look at real life situations. Indeed, we live in a world made up of _interacting objects_. 

[^1]: Alan Key, for example, discovered that children learned [SmallTalk](https://en.wikipedia.org/wiki/Smalltalk) faster than experienced programmers; see 
Key A., "Microelectronics and Personal Computer." Scientific American 237(3):230-244 (1977)

[^2]: Smith, M., and Tockey S. "An Integrated Approach to Software Requirement Definition Using Objects."
Boeing Commercial Airplane Support Division, Seatle, WA, (1988).
:::

When we model something (i.e. create an abstraction of it), we focus on some of its characteristics 
(that matter to the problem at hand) and ignore others (that are deemed irrelevant for solving the problem).
For example, this class models (the idea, concept of) circle in Grade 3 (K5) Geometry:

```java
public class Circle {
    private double radius;

    public Circle() { radius = 1; }
    public void setRadius (double r) { radius = r; }
    public double getRadius() { return radius; }
    public double getArea() { 
        return Math.PI * Math.pow(radius, 2); 
    }
}
```

And here we have a few different `Circle` objects (instances):

```java
Circle c1 = new Circle();
Circle c2 = new Circle();
c2.setRadius(3);
Circle c3 = new Circle();
```

An object has **state** and **behavior**.

The *state* of an object (a.k.a. its **properties** or **attributes**) are its essential and distinctive characteristics. A class declares attributes of its objects through its data _fields_ (instance variables). The state of an object is *value* of those data fields at any point in time. 
A `Circle` class, for example, has a data field `radius`, which is the property that characterizes a circle. 
A circle object with radius of `1` cm is an instance of the `Circle` class. If we update the radius of this circle to a new value, we have changed its state.

The *behavior* of an object is the set of operations, or **responsibilities**, it must fulfill. This includes
the responsibility to provide and modify state information when asked by _clients_ (other objects or services).
A behavior of an object is defined by the instance method that _implements_ that behavior.
To invoke a method on an object is to ask the object to fulfill a behavior (to perform an action).
For example, you may ask a circle object to provide you with its state by invoking the method `getRadius()` which is declared and implemented in the `Circle` class. 

