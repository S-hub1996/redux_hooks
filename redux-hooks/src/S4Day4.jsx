import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Redux-hooks/Components/Navbar";
import Signup from "./Redux-hooks/Pages/Signup";
import "./Redux-hooks/Pages/main.css";
import Profile from "./Redux-hooks/Pages/Profile";
import { Provider } from "react-redux";
import { store } from "./store";
import Task from "./Redux-hooks/Pages/Task";
import Todos from "./Redux-hooks/Pages/Todos";
import AddTodo from "./Redux-hooks/Pages/AddTodo";
import Summary from "./Redux-hooks/Pages/Summary";
import EditTodo from "./Redux-hooks/Pages/EditTodo";



const S4Day4 = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Task/>}>
            <Route index element={<Todos />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/addTodo" element={<AddTodo />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/todos/:id" element={<EditTodo />} />
          </Route>
          <Route path="/register" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Provider>
    </>
  );
};

export default S4Day4;