import React, { useState } from "react";

let studentDetails = {
  name: "",
  age: "",
  course: "",
  batch: "",
};
const Students = () => {
  const [store, setStore] = useState(studentDetails);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [hide, setHide] = useState(false);

  const editHandler = (e) => {
    const value = e.target.value;
    setStore((store) => ({ ...store, [e.target.name]: value }));
  };

const addData = () => {
    if (edit) {
      const updateData = data.map((row) => (row.id === store.id ? store : row));
      setData(updateData);
      setEdit(false);
      setStore(studentDetails);
      setHide(!hide);
    }
    else {
      let listItems = data;
      const item = {
        id: data.length,
        ...store,
      };
      listItems = [...data, item];
      setData(listItems);
      clearData();
      setHide(!hide);
    }
  };
  const clearData = () => {
    setStore(studentDetails);
  };
  const editRow = (row) => {
    setStore(row);
    setEdit(true);
    setHide(!hide);
  };

  return (
    <>
      {hide ? null : (
        <>
          <div className="con">
            <h1>Student Details</h1>
            <button className="new" onClick={() => {setHide(!hide);}}>
              Add New Student
            </button>
          </div>

          <div className="tab">
            <table className="table table-bordered">
              <thead>
                <tr className="neeeee">
                  <th>Name</th>
                  <th>Age</th>
                  <th>Course</th>
                  <th>Batch</th>
                  <th>Change</th>
                </tr>
              </thead>

              <tbody>
                <tr className="table-primary">
                  <td>Parth</td>
                  <td>24</td>
                  <td>MERN</td>
                  <td>July</td>
                  <td>Edit</td>
                </tr>
              </tbody>

              <tbody>
                {data && data.map((row) => (
                    <tr className="table-primary">
                      <th scope="row">{row.name}</th>
                      <td>{row.age}</td>
                      <td>{row.course}</td>
                      <td>{row.batch}</td>
                      <td>
                        <button onClick={() => { editRow(row);}} className="btn btn-success"> Edit </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {hide ? (
        <div>
          <div className="container">
            <input
              name="name"
              value={store.name}
              label="Name"
              placeholder="Add Name here . . ."
              onChange={editHandler}
              className="input"
            />
            <input
              name="age"
              value={store.age}
              label="Age"
              placeholder="Add Age here . . ."
              onChange={editHandler}
              className="input"
            />
            <input
              name="course"
              value={store.course}
              label="course"
              placeholder="Add Course here . . ."
              onChange={editHandler}
              className="input"
            />
            <input
              name="batch"
              value={store.batch}
              label="Batch"
              placeholder="Add Batch here . . ."
              onChange={editHandler}
              className="input"
            />
          </div>
          <div className="twobtn">
            <button onClick={addData} className="btn btn-success button">
              {edit ? "Update" : "Submit"}
            </button>
            <button onClick={clearData} className="btn btn-danger button">
              Clear
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Students;
