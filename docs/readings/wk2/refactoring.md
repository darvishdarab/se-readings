---
id: refactoring
title: Refactoring
sidebar_label: Refactoring
---


Design principles are guidelines; they are not laws! As with everything in life, you can go too far with applying these principles at the cost of making a design more complicated than it should be. **You should try to be pragmatic and don't take these principles as dogma!**

One strategy to keep the balance is to start simple (with a good enough design) but be prepared to *refactor* as you progress. In his classic book, [Refactoring](https://martinfowler.com/books/refactoring.html), Martin Fowler defines refactoring as:

:::tip Software Refactoring
The process of changing a software system in such a way hat it does not alter the external behavior of the code yet improves its internal structure.
:::

It may surprise you to learn [software rots](https://en.wikipedia.org/wiki/Software_rot)! It rots because of improper design; because over time, easy code changes are made instead of difficult design changes. **Refactoring is the art of making design changes over time to keep the software fit for its purpose and ready for more changes.**
It takes attention; one must be able to recognize the _smell_ of (software) rot to act in time.

:::info 
Code smells are structures in the code that indicate violation of design principles and negatively impact software quality. In other words, "a code smell is a surface indication that usually corresponds to a deeper problem in the system."
:::

Exploring code smells in details and possible refactorings for each smell is beyond the scope of this course. We will just quickly review some of the very common code smells and their possible fixes. If you would like to learn further about code smell and their treatments, you can start [here](https://refactoring.guru/refactoring/smells).

## Code Smell: Large Class

:::caution Code Smell: Large Class
A class contains many fields/methods/lines of code.
:::

It it mentally less taxing to place a new feature in an existing class than to create a new class for the feature. So, classes usually start small, but over time as the program matures, they get bloated. It's like the [Hotel California](https://en.wikipedia.org/wiki/Hotel_California); something is always being added to a class but nothing is ever taken out!

:::tip Fix
* When a class is (or is about to get) bloated, it is likely having too many responsibilities. Consider splitting it up into separate (smaller and more cohesive) components (think Single Responsibility Principle). 
* If the the issue is not extra responsibilities but more so about handling special cases, consider extracting subclasses (think Open/Closed Principle). 
* In the latter case, it makes for a better design to create abstractions (interfaces) to keep the inheritance hierarchies flat (think Dependency Inversion and Interface Segregation principles).
:::


## Code Smell: Long Methods

:::caution
If it is not possible to view the whole method on your 5" smartphone screen, the method is most likely a long method.
:::

The majority of a programmer's time is spent reading code rather than writing code. Apart from the difficulty of having to keep a lot of complex logic in mind whilst reading through a long method, it is usually a sign that the method has too many responsibilities. Long methods make code be hard to maintain and debug.

:::tip Fix
* break the long method into two or more smaller methods, each doing one precise thing (apply single responsibility at method level.)
* Sometimes, you have a long method where the local variables are so intertwined that it is not straightforward to break the method down into several methods; Instead, it might make sense to transform the method into a separate class so that the local variables become fields of the class. Then you can split the method into several methods within the same class.
:::


## Code Smell: Data Clumps

:::caution
"data clump" is a name given to any group of variables which are passed around together (in a clump) throughout various parts of the program. This for example happens where multiple method calls take the same set of parameters.
:::

Data clumps may be a sign that these parameters are related. As an example, consider the following three method calls:

```java
public void AddDataItem(int xCord, int yCord, int zCord) { ... }
public void removeDataItem(int xCord, int yCord, int zCord) { ... }
public void updateDataItem(int xCord, int yCord, int zCord) { ... }
```

All the three methods receive x, y and z coordinate values to add/update/remove a data point. `xCord`, `yCord` and `zCord` here can be considered a data clump. Possible remedies are:

:::tip Fix
* If the same data clumps are passed as arguments into the parameters of methods, it can be useful to combine them together in a class to keep the group of parameters together.
:::


## Code Smell: Duplicate Code

:::caution
It's been known for a developer to fix a bug, only for the same symptoms to then resurface in a slightly different part of the system. This can be the result of code duplication, and a bug being fixed in one occurrence of the imperfect code but not in the duplicated versions.
:::

Code duplicates pose an overhead in terms of testing, debugging and maintenance. When developers are not aware of the duplication, they only know to fix the occurrence they have come across. Always, be on the lookout for repeated code blocks and extract them out into a single place.

:::tip fix
Depending where/how the code appears, you can remedy it in different ways. The general idea is to move the duplication(s) into a single place. 
* If there are code duplication across two subclasses, consider moving the duplicated code into the parent class.
* If there are code duplication across two separate parts of the code, consider extracting the duplicate code into a stand-alone method.
:::

:::tip Extra Tip
There is in fact a design principle named DRY that is sometimes listed along with SOLID principles. DRY is short for Don't Repeat Yourself which essentially means avoid duplicate code by abstracting out things that are common and place those things in a single location.
:::


## Code Smell: Primitive Obsession

:::caution 
Primitive types give little in terms of domain context. If primitives have a domain meaning, wrap them in a small class to represent the idea. 
:::

Sometimes you are tempted to use primitives instead of small objects for simple tasks such as currency, email address, zip code, ranges, phone numbers, etc. This typically happens becuase creating a primitive field is so much easier than making a whole new class, right?

:::tip fix
* If you have a large variety of primitive fields, it may be possible to logically group some of them into their own class. 
* Even better, move the behavior associated with this data into the class too.
:::