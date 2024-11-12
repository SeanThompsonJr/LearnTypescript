/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

export default function DayFive() {
  // Generics example with a generic function
  //| best when working with various data type arrays
  function identity<T>(value: T): T {
    return value;
  }

  const stringIdentity = identity<string>("Hello");
  console.log(stringIdentity); // Output: Hello

  // Type Assertion example
  //| best when working with the dom
  //   const inputElement = document.getElementById("myInput") as HTMLInputElement;
  //inputElement.value = "Hello World"; // TypeScript knows this is an HTMLInputElement

  //!exercise 1
  //<Type> - type variable: a variable that works on types instead of values
  //this function could take any type and return any type of array
  function wrapInArray<Type>(value: Type): Type[] {
    const arr = [];
    arr.push(value);
    return arr;
  }
  console.log(wrapInArray(5));

  //!exercise 2

  class Pair<T, U> {
    first: T;
    second: U;

    constructor(first: T, second: U) {
      this.first = first;
      this.second = second;
    }
    swap() {
      const temp = this.first;
      this.first = this.second as unknown as T;
      this.second = temp as unknown as U;
    }
  }
  const PBJ = new Pair<boolean, string>(true, "jelly");
  const macAndCheese = new Pair<number, boolean>(9, false);
  //   console.log(PBJ);
  //   macAndCheese.swap();
  //   console.log(macAndCheese);
  interface User {
    name: string;
    age: number;
  }

  function parseJSON<P>(json: string): P {
    return JSON.parse(json) as P;
  }

  console.log(parseJSON<User>('{"name": "Bob", "age": 25}'));
  return (
    <div>
      <input type="text" name="" id="myInput" />
    </div>
  );
}
