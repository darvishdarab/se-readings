---
id: inheritance_poly
title: Inheritance and Polymorphism
sidebar_label: Inheritance and Polymorphism
---


## Inheritance

A _superclass_/_subclass_ relationship may exist between two classes when one class "is a kind of" the other class. Subclasses **inherit** the structure and behavior of their superclass. Therefore, common behavior and attributes can be defined once in the superclass rather than repeated in each subclass.

The followings create an inheritance hierarchy where `Circle` and `Retangle` inherit from `Shape`:

```java
public abstract class Shape {
  public abstract double area();            
  public abstract double circumference();   
}
```

```java
class Circle extends Shape {
  public static final double PI = 3.14159265358979323846;
  protected double r;                              
  public Circle(double r) { this.r = r; }          
  public double getRadius() { return r; }          
  public double area() { return PI*r*r; }          
  public double circumference() { return 2*PI*r; } 
}
```

```
class Rectangle extends Shape {
  protected double w, h;                               
  public Rectangle(double w, double h) {               
    this.w = w;  this.h = h;
  }
  public double getWidth() { return w; }               
  public double getHeight() { return h; }              
  public double area() { return w*h; }                 
  public double circumference() { return 2*(w + h); }  
}
```

## Polymorphism

**Polymorphism** (having many forms) is the ability of an entity in an object-oriented model to refer to objects of different classes at different times. For example, a method that accepts an object of certain class will also operate on its subclasses. 

```
public class MyShapeCollection {
  private List<Shape> shapes;

  public MyShapeCollection() { shapes = new ArrayList<>(); }
  public void add(Shape shape) { shapes.add(shape); }
  public double getTotalArea() {
    double total = 0;
    for (Shape shape: shapes) {
      total += shape.area();
    }
  }
}
```

We can pass any subclass of `Shape` to the `add` method:

```
MyShapeCollection myShapes = new MyShapeCollection();
myShapes.add(new Circle(2.0));
myShapes.add(new Rectangle(1.0, 3.0));
myShapes.add(new Rectangle(4.0, 2.0));
System.out.println(myShapes.getTotalArea());
```

We can store and iterate over any subclass of `Shape` in the shapes collection. When we invoke `area()` on a shape object, the polymorphic implementation of `area()` is selected at runtime based on what the "actual" (instantiated) type of the shape is (i.e. whether it is a `Circle` or `Rectangle`).