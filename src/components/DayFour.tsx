/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

export default function DayFour() {
  //defines a base class
  class Animal {
    constructor(public name: string) {}

    makeSound(): string {
      return `${this.name} makes a sound`;
    }
  }

  //defines a subclass that extends the base class
  class Dog extends Animal {
    makeSound(): string {
      return `${this.name} barks`;
    }
  }

  const myDog = new Dog("Buddy");
  console.log(myDog.makeSound());

  //!exercise 1
  class Vehicle {
    constructor(public make: string, public year: number) {}

    getInfo(): string {
      return `"${this.make}", year ${this.year}`;
    }
  }

  class Car extends Vehicle {
    //this constructor creates its own parameters
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {
      //we asign the parameters back to the parent in super
      super(make, year);
      this.model = model;
    }

    getInfo(): string {
      return `make: ${this.make} model: ${this.model} and year ${this.year}`;
    }
  }
  const myCar = new Car("chevy", "malaboo", 2021);
  console.log(myCar.getInfo());

  //!exercise 2
  class Person {
    constructor(public name: string) {}
    greet(): string {
      return `Hello my name is ${this.name}`;
    }
  }

  class Employee extends Person {
    constructor(public name: string, public jobTitle: string) {
      super(name); //from person class
      this.jobTitle = jobTitle; //added in employee
    }
    greet(): string {
      return `Hello my name is ${this.name} and i am a ${this.jobTitle}`;
    }
  }
  //creating a new instance of employee
  const myEmployee = new Employee("velo", "backend developer");
  //logging greet
  console.log(myEmployee.greet());

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Rectanlge extends Shape {
    constructor(public width: number, public height: number) {
      //because rectangle is an extention of shape the super call must be here even if its empty
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  class Circle extends Shape {
    constructor(public radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }

  function printArea(shape: Shape) {
    console.log(shape.getArea());
  }
  const rect1 = new Rectanlge(2, 5);
  const cir1 = new Circle(3);

  printArea(rect1);
  printArea(cir1);
  return <div></div>;
}
