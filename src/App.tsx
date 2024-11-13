/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import DayTwo from "./components/DayTwo";
import DayThree from "./components/DayThree";
import DayFour from "./components/DayFour";
import Fundamentals from "./components/Fundamentals";
import DayFive from "./components/DayFive";
import DaySix from "./components/DaySix";
import DaySeven from "./components/DaySeven";
import { fetchData } from "./components/DaySeven";
import Todo from "./projects/todo";
function App() {
  // async function displayData() {
  //   try {
  //     const data = await fetchData("https://api.example.com/data");
  //     console.log("Data: ", data);
  //   } catch (error) {
  //     console.error("custome msg - Error fetching data:", error);
  //   }
  // }
  //displayData();
  return (
    <>
      {/* <DayTwo></DayTwo> */}
      {/* <DayThree></DayThree> */}
      {/* <DayFour></DayFour> */}
      {/* <Fundamentals></Fundamentals> */}
      {/* <DayFive></DayFive> */}
      {/* <DaySix></DaySix> */}
      {/* <DaySeven></DaySeven> */}
      <Todo></Todo>
      <div className="text-5xl"></div>
    </>
  );
}

export default App;
