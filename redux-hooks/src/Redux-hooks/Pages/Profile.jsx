import React, { useState } from "react";
import { useSelector } from "react-redux";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state);
  const { name, email, password } = user;
  const [show, setShow] = useState(false);

  if (!user) {
    return <Navigate to="/register" />;
  }
  return (
    <div className="profile">
      <div className="profile_heading">
        <h1>Account Overview</h1>
        <h1 className="profile_avatar">{name.substring(0, 1)}</h1>
      </div>
      <div className="profile_sub">
        <h2>Profile</h2>
        <div className="profile_flex">
          <h4>Email</h4>
          <p>{email}</p>
        </div>
        <div className="profile_flex">
          <h4>Username</h4>
          <p>{name}</p>
        </div>
        <div className="profile_flex">
          <h4>Password</h4>
          <div className="profile_pass">
            <input type={show ? "text" : "password"} value={password} />
            {!show && (
              <VisibilityOffIcon
                style={{
                  fontSize: "18px",
                  marginLeft: ".4rem",
                  cursor: "pointer",
                }}
                onClick={() => setShow(!show)}
              />
            )}
            {show && (
              <RemoveRedEyeIcon
                style={{
                  fontSize: "18px",
                  marginLeft: ".4rem",
                  cursor: "pointer",
                }}
                onClick={() => setShow(!show)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;