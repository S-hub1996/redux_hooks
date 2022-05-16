import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { addData } from "../Redux/action";

const AddTodo = () => {
  const { isLoading, isError } = useSelector((state) => state);

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const notify = () => toast("Todo Added");
  const error = () => toast.error("Something went wrong");

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.id = uuid();
    dispatch(addData(formData));
    !isError ? notify() : error();
  };
  return isLoading ? (
    <div className="loading">
      <CircularProgress />
    </div>
  ) : (
    <>
      <div className="AddTodo">
        <h1>Add New Tasks</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formFlex">
            <div className="input">
              <label style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                Title
              </label>
              <br />
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                required
                onChange={handleChange}
              />
              <br />
              <label style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                Description
              </label>
              <br />
              <textarea
                name="desc"
                cols="30"
                rows="10"
                placeholder="Enter Description"
                required
                onChange={handleChange}
              ></textarea>
              <br />
              <label style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                Date
              </label>
              <br />
              <input type="date" name="date" required onChange={handleChange} />
              <br />
            </div>
            <div>
              <h2>Type</h2>
              <br />
              <label>
                <input
                  type="radio"
                  name="type"
                  value="Todo"
                  onChange={handleChange}
                />
                Todo
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="type"
                  value="progress"
                  onChange={handleChange}
                />
                In Progress
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="type"
                  value="done"
                  onChange={handleChange}
                />
                Done
              </label>
              <br />
              <br />
              <h2>Tag (Multiple Possible)</h2>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="official"
                  onChange={handleChange}
                />
                Official
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="personal"
                  onChange={handleChange}
                />
                Personal
              </label>
              <br />
              <label>
                <input type="checkbox" name="others" onChange={handleChange} />{" "}
                Others
              </label>
              <br />
            </div>
          </div>
          <input type="submit" value="Add" />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddTodo;