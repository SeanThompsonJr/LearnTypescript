/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { delaySquare } from "./mathUtils";
import { fetchUserData } from "./FetchUserData";
import { DataService } from "./DataService";
//!example
//async/await
export async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  return response.json();
}
//rest in app.tsk

//!exercise 1
// in mathUtils.ts file
//delaySquare(5);

//!exercise 2
async function displayData() {
  try {
    const data = await fetchUserData(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log(data.name);
  } catch (error) {
    console.error("Error:", error);
  }
}
displayData();

//!exercise 3
const dataServe = new DataService();
console.log(dataServe.getPostTitles());
export default function DaySeven() {
  //modular: utils.ts

  return <div></div>;
}
