import React, { useState } from "react";

interface Task {
  id: string;
  desc: string;
  completed: boolean;
}

export default function Todo() {
  //variables
  const [inputData, setInputData] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  //!getting input from the user
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);

    e.preventDefault();
  };
  //!handles what happens when you submit
  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    //store the input in an array variable
    const newTask: Task = {
      id: Date.now().toString(),
      desc: inputData,
      completed: false,
    };
    //make task into task spread out and add the new task
    setTasks([...tasks, newTask]);
    //reset the input to empty string
    setInputData("");

    event.preventDefault();
  }

  //!handling check
  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const taskId = (e.target as HTMLButtonElement).id;
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        //returns the first two properties of task as whatever it is
        //but assigns completed to be assigns completed to be the currents target check value
        return { ...task, completed: e.target.checked };
      }
      return task;
    });

    setTasks(updatedTasks);
  }
  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    //the task id found in the element
    const taskId = (e.target as HTMLInputElement).id;
    //an array that filters out the matching id's
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    // console.log(updatedTasks);
  }
  return (
    <div className="flex justify-center align-center flex-col">
      <form
        onSubmit={handleSubmit}
        className="todo-container  flex justify-center"
      >
        <input
          onChange={handleInputChange}
          type="text"
          value={inputData}
          className=" bg-gray-800 text-white p-2"
        />
        <button type="submit" className="bg-orange-300 rounded-lg p-2">
          submit
        </button>
      </form>
      <div className=" bg-green-300 w-full h-96 flex justify-center ">
        <div id="todo-list" className="bg-purple-400 w-80 h-96">
          <ul className="text-center">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex gap-2 justify-center items-center"
              >
                <input
                  id={task.id}
                  checked={task.completed}
                  onChange={handleCheck}
                  type="checkbox"
                />
                <li
                  className={`text-center ${
                    task.completed ? `line-through` : ``
                  }`}
                  key={task.id}
                >
                  {task.desc}
                </li>
                <button
                  onClick={handleDelete}
                  id={task.id}
                  className="bg-red-800 p-1 rounded-md"
                >
                  delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
