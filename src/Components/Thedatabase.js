import React, { useState } from "react";

const Thedatabase = () => {
  const [database, setdatabase] = useState([]);
  const [name, setname] = useState("");
  const [rollno, setrollno] = useState("");

  const [mothername, setmothername] = useState("");
  const [fathername, setfathername] = useState("");
  const [marks1, setmarks1] = useState("");
  const [marks2, setmarks2] = useState("");
  const [marks3, setmarks3] = useState("");
  const [marks4, setmarks4] = useState("");
  const [marks5, setmarks5] = useState("");
  const [marks6, setmarks6] = useState("");
  const submitData = () => {
    const olddatabase = [...database];
    const Updatabase = {
      studentname: name,
      Rollnumber: rollno,

      Fathername: fathername,
      Mothername: mothername,
      Marks1: marks1,
      Marks2: marks2,
      Marks3: marks3,
      Marks4: marks4,
      Marks5: marks5,
      Marks6: marks6,
    };
    olddatabase.push(Updatabase);
    setdatabase(olddatabase);
  };
  const deleterecord = (c) => {
    let olddatabase = [...database];
    const Updatabase = olddatabase.filter((v, i) => i !== c);
    setdatabase(Updatabase);
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
        <h1>The Database</h1>
        <div className="mt-2;">
          <label>Student Name </label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Student Name"
          />
        </div>
        <br />
        <div className="mt-2;">
          <label>Roll No.</label>
          <input
            value={rollno}
            onChange={(e) => setrollno(e.target.value)}
            type="number"
            placeholder="Enter Roll No."
          />
        </div>
        <br />

        <br />
        <div className="mt-2;">
          <label>Mother's Name</label>
          <input
            value={mothername}
            onChange={(e) => setmothername(e.target.value)}
            type="text"
            placeholder="Enter Mother's Name"
          />
        </div>
        <br />
        <div className="mt-2;">
          <label>Father's Name</label>
          <input
            value={fathername}
            onChange={(e) => setfathername(e.target.value)}
            type="text"
            placeholder="Enter Father's Name"
          />
        </div>
        <br />
        <h2>Session:2022-2023 Semester:First</h2>
        <table>
          <tr>
            <th>Subject Code</th>
            <th>Marks</th>
          </tr>
          <tr>
            <th>BSM-101</th>
            <td>
              <input
                value={marks1}
                onChange={(e) => setmarks1(e.target.value)}
                type="number"
                placeholder="Enter marks"
              ></input>
            </td>
          </tr>

          <tr>
            <th>BEE-101</th>
            <td>
              <input
                value={marks2}
                onChange={(e) => setmarks2(e.target.value)}
                type="number"
                placeholder="Enter marks"
              ></input>
            </td>
          </tr>
          <tr>
            <th>BHM-101</th>
            <td>
              <input
                value={marks3}
                onChange={(e) => setmarks3(e.target.value)}
                type="number"
                placeholder="Enter marks"
              ></input>
            </td>
          </tr>
          <tr>
            <th>BEC-103</th>
            <td>
              <input
                value={marks4}
                onChange={(e) => setmarks4(e.target.value)}
                type="number"
                placeholder="Enter marks"
              ></input>
            </td>
          </tr>
          <tr>
            <th>BSM-142</th>
            <td>
              <input
                value={marks5}
                onChange={(e) => setmarks5(e.target.value)}
                type="number"
                placeholder="Enter marks"
              ></input>
            </td>
          </tr>
          <tr>
            <th>BSM-127</th>
            <td>
              <input
                value={marks6}
                onChange={(e) => setmarks6(e.target.value)}
                type="number"
                placeholder="Enter marks"
              ></input>
            </td>
          </tr>
        </table>
        <button
          onClick={() => submitData()}
          class="Submit"
          style={{ backgroundColor: "cornsilk" }}
        >
          Submit
        </button>
      </div>
      {database.map((v, i) => {
        return (
          <div style={{ backgroundColor: "darkgray", color: "darkblue" }}>
            <h3>Record</h3>
            <ul>
              <li>Name: {v.studentname}</li>
              <li>Roll No: {v.Rollnumber}</li>
              <li>Mother's Name: {v.Mothername}</li>
              <li>Father's Name: {v.Fathername}</li>
              <br></br>

              <li>BSM-101: {v.Marks1}</li>
              <li>BEE-101: {v.Marks2}</li>
              <li>BHM-101: {v.Marks3}</li>
              <li>BEC-103: {v.Marks4}</li>
              <li>BSM-142: {v.Marks5}</li>
              <li>BSM-127: {v.Marks6}</li>
            </ul>
            <button
              style={{
                backgroundColor: "greenyellow",
                color: "darkolivegreen",
              }}
              onClick={() => deleterecord(i)}
              type="button"
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Thedatabase;
