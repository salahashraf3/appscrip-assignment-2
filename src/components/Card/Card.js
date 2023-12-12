import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  name,
  id,
  assessment,
  taskId,
  date,
  duration,
  status,
  button,
}) => {
  return (
    <div className="card">
      <div className="name_group">
        <div className="profile_pic">
          <img src="./assets/profilePhoto.png" alt="profile" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            justifyContent: "space-between",
          }}
        >
          <div className="group1">
            <h6>{name}</h6>
            <p style={{ color: "rgba(126, 126, 126, 1)" }}>
              Appointment Id : {id}
            </p>
          </div>
          <div className="group2">
            <Link className="group2_link">{assessment}</Link>
          </div>
        </div>
      </div>
      <div className="task_date_group">
        <div className="task_date_left">
          <p>Task Id: </p>
          <p>Date & time: </p>
          <p>Duration: </p>
        </div>
        <div className="task_date_right">
          <p>{taskId}</p>
          <p>{date}</p>
          <p>{duration}</p>
        </div>
      </div>
      <div className="task_status_group">
        {status !== "" && (
          <p>
            Status:{" "}
            <span
              style={
                status === "Upcoming"
                  ? { color: "green", fontWeight: "600", fontSize: "16px" }
                  : { color: "red", fontWeight: "600", fontSize: "16px" }
              }
            >
              {status}
            </span>
          </p>
        )}

        <button className="start_btn">{button}</button>
      </div>
    </div>
  );
};

export default Card;
