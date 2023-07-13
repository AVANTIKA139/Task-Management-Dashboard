import React, { useState } from "react";

const Task = () => {
  const [newtask, settask] = useState([]);
  const [newtasktitle, setnewtasktitle] = useState("");
  const [newtaskdescription, setnewtaskdescription] = useState("");
  const [newtaskduedate, setnewtaskduedate] = useState([new Date()]);
  const createTask = () => {
    const oldtask = [...newtask];
    const Uptask = {
      taskname: newtasktitle,
      taskdescription: newtaskdescription,
      taskdate: newtaskduedate,
      taskstatus: "To Do",
    };
    oldtask.push(Uptask);
    settask(oldtask);
  };

  const updatedtask = (c) => {
    const oldtask = [...newtask];
    oldtask[c].taskstatus = "In Progress";

    settask(oldtask);
  };
  const deletetask = (c) => {
    let oldtask = [...newtask];
    const uptask = oldtask.filter((v, i) => i !== c);
    settask(uptask);
  };

  return (
    <>
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
        <h1 style={{ backgroundColor: "", color: "black" }}>
          Task Management Dashboard
        </h1>
        <div className="mt-2;">
          <label>Task Title </label>
          <input
            value={newtasktitle}
            onChange={(e) => setnewtasktitle(e.target.value)}
            type="text"
            placeholder="Enter your task"
          />
        </div>
        <br />
        <div className="mt-2;">
          <label>Task Description</label>
          <textarea
            value={newtaskdescription}
            onChange={(e) => setnewtaskdescription(e.target.value)}
            textareatype="text"
            placeholder="Enter Description"
          />
        </div>
        <br />
        <div className="mt-2;">
          <label>Task Due Date</label>
          <input
            value={newtaskduedate}
            onChange={(e) => setnewtaskduedate(e.target.value)}
            type="date"
          />
        </div>
        <br />
        <button
          class="createtask"
          style={{ backgroundColor: "cornsilk" }}
          onClick={() => createTask()}
        >
          Create Task
          {/* <AddBoxIcon /> */}
        </button>
      </div>
      {newtask.map((v, i) => {
        return (
          <div
            key={i}
            className="m-2 p-2"
            style={
              v.taskstatus === "ON GOING"
                ? { backgroundColor: "navy", color: "brown" }
                : { backgroundColor: "coral", color: "red" }
            }
          >
            <h3 style={{ backgroundColor: "black" }}> New Task</h3>
            <ul>
              <li>Title: {v.taskname}</li>
              <li>Description:{v.taskdescription}</li>
              <li>Date:{v.taskdate}</li>
              <li>Status:{v.taskstatus}</li>
            </ul>
            <button
              style={{
                backgroundColor: "greenyellow",
                color: "darkolivegreen",
              }}
              onClick={() => deletetask(i)}
              type="button"
            >
              Delete
            </button>
            <button
              style={{
                backgroundColor: "greenyellow",
                color: "darkolivegreen",
              }}
              onClick={() => updatedtask(i)}
              type="button"
            >
              Start task
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Task;
