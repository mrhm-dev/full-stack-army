import React, { useState } from "react";
import Layout from "../layout/Layout";
import CreateTask from "./Tasks/createTask";
import shortid from "shortid";
import Showtask from "./Tasks/Showtask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState("all");

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: shortid.generate(),
    };
    setTasks([task, ...tasks]);
  };

  const handleVisibility = (text) => {
    setVisibility(text);
  }

  const toggleComplete = (id) => {
    const newTask = tasks.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setTasks(newTask);
  }

  function getFilteredTask(){
    if(visibility === 'completed') return tasks.filter(task => task.isCompleted)
    if(visibility === 'pending') return tasks.filter(task => !task.isCompleted)
    return tasks
  }

  return (
    <Layout>
      <CreateTask addNewTask={addNewTask} />
      <button onClick={()=> handleVisibility("all")}>All</button>
      <button onClick={()=> handleVisibility("completed")}>Completed</button>
      <button onClick={()=> handleVisibility("pending")}>Pending</button>
      <div>Current Visibility : {visibility} </div>
      <Showtask tasks={getFilteredTask()} toggleComplete={toggleComplete} />
    </Layout>
  );
};

export default Tasks;
