import React from "react";
import { NavLink } from "react-router-dom";

const TodoNav = () => {
  return (
    <div className="todoNav">
      <NavLink to={"/todos"}>Todos</NavLink>
      <NavLink to={"/addTodo"}>Add Todo</NavLink>
      <NavLink to={"/summary"}>Summary</NavLink>
    </div>
  );
};

export default TodoNav;