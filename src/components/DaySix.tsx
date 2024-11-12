/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

export default function DaySix() {
  //! example
  //enums example
  enum Direction {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    West = "WEST",
  }

  //advance type example: Union and Type Guard
  type SuccessResponse = { status: "success"; data: any };
  type ErrorResponse = { status: "error"; error: string };
  //Union type
  type APIResponse = SuccessResponse | ErrorResponse;
  //type guard
  function handleResponse(response: APIResponse) {
    if (response.status === "success") {
      console.log("Data:", response.data);
    } else {
      console.log("Error:", response.error);
    }
  }

  const response: APIResponse = {
    status: "success",
    data: { message: "Hello" },
  };
  //   handleResponse(response);

  //!exercise 1

  enum Status {
    Pending = "request is pending",
    Approved = "request approved",
    Rejected = "request rejected try again later",
  }
  function getStatusMessage(stat: Status): string {
    return stat;
  }
  //   console.log(getStatusMessage(Status.Pending));

  //!exercise 2

  interface Circle {
    radius: number;
  }
  interface Square {
    side: number;
  }

  const myCir: Circle = {
    radius: 5,
  };
  const mySqu: Square = {
    side: 4,
  };

  type Shape = Circle | Square;

  function getArea(shape: Shape) {
    //checks if the property radius is in the shape object
    if ("radius" in shape) {
      console.log(Math.PI * shape.radius ** 2);
    } else {
      console.log(shape.side * 2);
    }
  }
  //   getArea(mySqu);
  //   getArea(myCir);

  //!exercise 3
  enum LogLevel {
    Info,
    Warning = "Warning: ",
    Error = "Error: ",
  }
  function logMessage(msg: string, log: LogLevel) {
    return log === 0 ? (log = 0) : console.log(log + msg);
  }
  logMessage("me i'm the problem", LogLevel.Warning);
  logMessage("this will be ignored", LogLevel.Info);
  return <div></div>;
}
