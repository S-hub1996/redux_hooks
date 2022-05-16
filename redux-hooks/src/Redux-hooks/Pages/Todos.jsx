import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../Redux/action";
import Todo from "./Todo";
import Progress from "./Progress";
import Done from "./Done";

const Todos = () => {
  const { isLoading, isError } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return isLoading ? (
    <div className="loading">
      <CircularProgress />
    </div>
  ) : (
    <>
      {isError ? (
        <Alert variant="outlined" severity="error">
          Something went wrong while fetching Data.
        </Alert>
      ) : (
        ""
      )}
      <div className="flex">
        <Todo />
        <Progress />
        <Done />
      </div>
    </>
  );
};

export default Todos;