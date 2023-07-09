import React, { useState } from "react";

const TaskManagement = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [duedate, setduedate] = useState(new Date());
  const createTask = () => {
    console.log(title);
    console.log(description);
    console.log(duedate);
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
          height: "100%",
          borderRadius: "5%",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontFamily: "fantasy",
            fontSize: "300%",
            fontPalette: "light",
            margin: "auto",
            display: "grid",
          }}
        >
          Task Management Dashboard
        </h1>
        <div className="ms-3">
          <label>Task Title</label>
          <input
            className="ms-3"
            value={title}
            placeholder="Enter Task Title"
            onChange={(e) => settitle(e.target.value)}
            type="text"
          />
        </div>
        <br></br>
        <div className="ms-3">
          <label>Task Description</label>
          <textarea
            type="text"
            className="ms-3"
            value={description}
            placeholder="Enter Task Description"
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <br></br>
        <div className="ms-3">
          <label>Task due date</label>
          <input
            className="ms-3"
            value={duedate}
            placeholder="Enter Task Due Date"
            onChange={(e) => setduedate(e.target.value)}
            type="date"
          />
        </div>

        <br></br>
      </div>
      <button
        style={{
          backgroundColor: "pink",
          color: "purple",
          fontSize: "180%",

          margin: "auto",
          display: "grid",
        }}
        type="btn"
        className="m-2 p-2"
        onClick={() => createTask()}
      >
        Create Task
      </button>
    </>
  );
};
export default TaskManagement;
