import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import TodoNav from "../Components/TodoNav";

const Task = () => {
  const { user } = useSelector((state) => state);
  if (!user) {
    return <Navigate to="/register" />;
  }
  return (
    <>
      <div className="mainSection">
        <div className="sideSection">
          <Sidebar />
        </div>
        <div className="todoSection">
          <TodoNav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Task;