import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getProgress } from "../Redux/action";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const { inProgress } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProgress());
  }, [dispatch]);

  const handleClick = (id) => {
    navigate(`/todos/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todoItems">
      <h1 className="progress">Progress</h1>
      {inProgress.length < 1 && <p>No item to show</p>}

      <div>
        {inProgress.map((item) => {
          const { id, title, official, desc, personal, others, date } = item;
          return (
            <div key={id} className="item">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2>{title}</h2>
                <div>
                  <EditIcon
                    style={{
                      fontSize: "1.4rem",
                      cursor: "pointer",
                      marginRight: ".4rem",
                    }}
                    onClick={() => handleClick(id)}
                  />
                  <DeleteIcon
                    style={{ fontSize: "1.4rem", cursor: "pointer" }}
                    onClick={() => handleDelete(id)}
                  />
                </div>
              </div>
              <div className="itemFlex">
                <p>
                  {official && "official "}
                  {personal && "personal "}
                  {others && "others"}
                </p>
                <p>{date}</p>
              </div>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Progress;