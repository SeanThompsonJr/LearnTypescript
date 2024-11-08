/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

export default function DayThree() {
  //functions and interfaces
  //interface defines the structure of an obj aka allowed data types for each property
  //ex
  interface User {
    name: string;
    age: number;
    isActive: boolean;
  }

  function greet(user: User): string {
    return `Hello, ${user.name}. you are ${user.age} years old. ${
      user.isActive ? "and i do skating" : ""
    }`;
  }
  const userObj: User = {
    name: "sean",
    age: 25,
    isActive: true,
  };
  const userObj2: User = {
    name: "bronny",
    age: 29,
    isActive: false,
  };

  //   console.log(greet(userObj));
  //   console.log(greet(userObj2));

  //!exercise 1
  interface Product {
    name: string;
    price: number;
    category: string;
  }
  function discountPrice(product: Product, discount: number): number {
    return product.price - product.price * (discount * 0.01);
  }
  const productOne: Product = {
    name: "cheese",
    price: 260,
    category: "dairy",
  };
  //   console.log(discountPrice(productOne, 50));

  //!exercise 2

  interface Employee {
    name: string;
    role: string;
    yearsOfService: number;
  }
  function eligibleForPromotion(employee: Employee): boolean {
    if (employee.yearsOfService >= 5) return true;

    return false;
  }
  const employeeOne: Employee = {
    name: "jose",
    role: "pet groomer",
    yearsOfService: 6,
  };
  const employeeTwo: Employee = {
    name: "bart",
    role: "technician",
    yearsOfService: 2,
  };

  //   console.log(
  //     eligibleForPromotion(employeeOne)
  //       ? `${employeeOne.name} (${employeeOne.role}) is ready for a promotion`
  //       : "unfortutnely not ready"
  //   );
  //   console.log(
  //     eligibleForPromotion(employeeTwo)
  //       ? `${employeeTwo.name} (${employeeTwo.role}) is ready for a promotion`
  //       : "unfortutnely not ready"
  //   );
  //!exercise 3
  //defining the structure of a rectangle
  interface Rectangle {
    width: number;
    height: number;
    calculateArea(w: number, h: number): number;
  }
  // defining the function that will operate/ use rectangle
  function logRectangleInfo(rect: Rectangle) {
    console.log("width:" + rect.width);
    console.log("height:" + rect.height);
    console.log("area:" + rect.calculateArea(rect.width, rect.height));
  }
  //intializing a rectangle
  const rectOne: Rectangle = {
    width: 7,
    height: 5,
    calculateArea(w, h) {
      return w * h;
    },
  };
  //execute function that uses rectangle
  logRectangleInfo(rectOne);
  return <div></div>;
}
