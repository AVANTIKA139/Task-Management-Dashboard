import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Task = () => {
  const [tasks, setasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState();
  const [taskDescription, settaskDescription] = useState();
  const [taskDueDate, settaskDueDate] = useState();
  const createTask = () => {
    if (taskTitle === "") return toast.warning("Please provide task title");
    else if (taskDescription === "")
      return toast.warning("Please enter task description");
    else if (!taskDueDate) return toast.warning("Please provide due date");
    const newTask = {
      tasktitle: taskTitle,
      taskdescription: taskDescription,
      taskduedate: taskDueDate,
      taskstatus: "TO DO",
    };
    const oldTask = [...tasks];
    oldTask.push(newTask);
    setasks(oldTask);
    setTaskTitle("");
    settaskDescription("");
  };
  const handlechangestatus = (index, status) => {
    let oldTask = [...tasks];
    if (status === "TO DO") {
      oldTask[index].taskstatus = "ON GOING";
    } else if (status === "ON GOING") {
      oldTask[index].taskstatus = "COMPLETED";
    } else if (status === "COMPLETED") {
      oldTask[index].taskstatus = "TO DO";
    }
    setasks(oldTask);
  };
  const handledeletetask = (index) => {
    let oldTask = [...tasks];
    let updatedTask = oldTask.filter((v, i) => i !== index);
    setasks(updatedTask);
  };
  const getButtonName = (status) => {
    if (status === "TO DO") return "START TASK";
    else if (status === "ON GOING") return "COMPLETE TASK";
    else if (status === "COMPLETED") return "RESTART";
  };
  const getColor = (status) => {
    if (status === "TO DO") return "darkblue";
    else if (status === "ON GOING") return "darkgreen";
    else if (status === "COMPLETED") return "orange";
  };
  return (
    <>
      <ToastContainer />
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          placeItems: "center",
          display: "flex",
          flexDirection: "column",

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "aqua",

          border: "10px solid transparent",
          padding: "15px",
          borderImage: "url(border.png) 30 stretch",
          backgroundSize: "cover",
          height: "100vh",

          position: "relative",
        }}
      >
        <h1> Task Management Dashboard</h1>
        <>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail">Task Title</label>
              {/* Label tag is used to specify a label for an <input>element of a form */}
              <input
                type="text"
                required
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                class="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter Task Title"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Task Description</label>
              <textarea
                required
                value={taskDescription}
                onChange={(e) => settaskDescription(e.target.value)}
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Task Description"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Task Due Date</label>
              <input
                required
                type="date"
                value={taskDueDate}
                onChange={(e) => settaskDueDate(e.target.value)}
              />
            </div>
            <button
              onClick={() => createTask()}
              type="button"
              class="btn btn-primary mt-2 p-2"
            >
              Create Task
            </button>
          </form>
        </>
        {tasks.map((v, i) => {
          return (
            <>
              <div
                class="card mt-2"
                style={{
                  backgroundColor: getColor(v.taskstatus),
                  color: "yellow",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title">{v.tasktitle}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    DUE: {v.taskduedate}
                  </h6>
                  <p class="card-text">{v.taskdescription}</p>
                  <h7> {v.taskstatus}</h7>
                  <button
                    class="btn btn-primary me-2"
                    onClick={() => handlechangestatus(i, v.taskstatus)}
                  >
                    {getButtonName(v.taskstatus)}
                  </button>
                  <button
                    class="btn btn-secondary"
                    onClick={() => handledeletetask(i)}
                  >
                    Delete Task
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Task;
