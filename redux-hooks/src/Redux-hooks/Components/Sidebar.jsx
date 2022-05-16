import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, getOthers } from "../Redux/action";

const Sidebar = () => {
  const { user } = useSelector((state) => state);
  const { name } = user;
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const value = e.target.innerHTML.toLowerCase();
    if (value === "all") {
      dispatch(getAll());
    } else {
      dispatch(getOthers(value));
    }
  };
  return (
    <>
      <div className="sideBar">
        <div className="sideBar_top">
          <h1 className="side_avatar">{name.substring(0, 1)}</h1>
          <p>{name}</p>
        </div>
        <div className="sideBar_middle">
          <p onClick={(e) => handleClick(e)}>All</p>
          <p onClick={(e) => handleClick(e)}>Personal</p>
          <p onClick={(e) => handleClick(e)}>Official</p>
          <p onClick={(e) => handleClick(e)}>Others</p>
        </div>
        <div className="sideBar_bottom">
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.setItem("user", JSON.stringify(""));
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;