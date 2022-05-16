import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { updateTodo } from "../Redux/action";

const EditTodo = () => {
  const { isLoading, isError } = useSelector((state) => state);
  const initData = {
    title: "",
    desc: "",
    date: "",
    type: "",
    official: false,
    others: false,
    personal: false,
  };
  const [formData, setFormData] = useState(initData);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const notify = () => toast("Todo Edited Successfully");
  const error = () => toast.error("Something went wrong");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ReduxTodos/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

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
    dispatch(updateTodo(formData));
    !isError ? notify() : error();
    navigate("/todos");
  };
  return isLoading ? (
    <div className="loading">
      <CircularProgress />
    </div>
  ) : (
    <>
      <div className="AddTodo">
        <h1>Edit Task</h1>
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
                value={formData.title}
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
                value={formData.desc}
              ></textarea>
              <br />
              <label style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                Date
              </label>
              <br />
              <input
                type="date"
                name="date"
                required
                onChange={handleChange}
                value={formData.date}
              />
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
                  checked={formData.type === "Todo" ? true : false}
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
                  checked={formData.type === "progress" ? true : false}
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
                  checked={formData.type === "done" ? true : false}
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
                  checked={formData.official}
                />
                Official
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="personal"
                  checked={formData.personal}
                  onChange={handleChange}
                />
                Personal
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="others"
                  onChange={handleChange}
                  checked={formData.others}
                />{" "}
                Others
              </label>
              <br />
            </div>
          </div>
          <input type="submit" value="Done" />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default EditTodo;