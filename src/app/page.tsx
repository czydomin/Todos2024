"use client";
import Image from "next/image";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Filters from "./components/Filters";
import Task from "./components/Task";
import { useState } from "react";
export default function Home() {
  type Task = {
    taskName: string;
    isDone: boolean;
  };
  const defaultList = [
    { taskName: "gggg", isDone: true },
    { taskName: "cleaning the house", isDone: false },
  ];
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState<Task[]>(defaultList);
  const [filter, setFilter] = useState<"ALL" | "TODO" | "DONE">("ALL");

  function handleOnAdd() {
    setTaskName("");
    const newTask = {
      taskName: taskName,
      isDone: false,
    };
    setTaskList([...taskList, newTask]);
  }

  function handleOnDone(taskName: string) {
    const updatedList = taskList.map((task) => {
      if (task.taskName !== taskName) {
        return task;
      }

      return {
        ...task,
        isDone: !task.isDone,
      };
    });
    setTaskList(updatedList);
  }

  function handleOnDelete(taskName: string) {
    const newList = taskList.filter((task) => {
      return task.taskName !== taskName;
    });
    setTaskList(newList);
  }
  return (
    <main className="flex flex-col gap-4 items-center ">
      <Header />
      <TopBar
        onAdd={handleOnAdd}
        value={taskName}
        onChange={(event) => {
          setTaskName(event.target.value);
        }}
      />
      <Filters status={filter} setStatus={setFilter} />
      <ul className="flex flex-col w-full items-center gap-2">
        {taskList
          .filter((task) => {
            if (filter === "TODO" && task.isDone === false) {
              return true;
            }
            if (filter === "DONE" && task.isDone === true) {
              return true;
            }
            if (filter === "ALL") {
              return true;
            }
            return false;
          })
          .map((task) => {
            return (
              <Task
                key={task.taskName}
                taskName={task.taskName}
                onDone={() => handleOnDone(task.taskName)}
                isDone={task.isDone}
                onDelete={() => handleOnDelete(task.taskName)}
              />
            );
          })}
      </ul>
    </main>
  );
}
