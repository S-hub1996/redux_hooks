import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { addUser } from "../Redux/action";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const { user, isLoading, isError } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(form));
  };

  if (user) {
    return <Navigate to={"/profile"} />;
  }
  return isLoading ? (
    <div className="loading">
      <CircularProgress />
    </div>
  ) : (
    <div className="register">
      <div>
        <h1>Register Here</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            onChange={handleChange}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={handleChange}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
      {isError ? (
        <Stack sx={{ width: "500px" }} spacing={2}>
          <Alert variant="outlined" severity="error">
            Something went wrong while registering.
          </Alert>
        </Stack>
      ) : (
        ""
      )}
    </div>
  );
};

export default Signup;