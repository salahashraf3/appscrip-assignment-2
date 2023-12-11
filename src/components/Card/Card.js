import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  name,
  id,
  assessment,
  tasId,
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
            <h1>{name}</h1>
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
        <p>
          Task Id:{" "}
          <span style={{ color: "black", fontWeight: "900", fontSize: "17px" }}>
            {tasId}
          </span>
        </p>
        <p>
          Date & time:{" "}
          <span style={{ color: "black", fontWeight: "900", fontSize: "17px" }}>
            {date}
          </span>{" "}
        </p>
        <p>
          Duration:{" "}
          <span style={{ color: "black", fontWeight: "900", fontSize: "17px" }}>
            {duration}
          </span>
        </p>
      </div>
      <div className="task_status_group">
        {status !== "" && (
          <p>
            Status:{" "}
            <span
              style={
                status === "Upcoming"
                  ? { color: "green", fontWeight: "900", fontSize: "16px" }
                  : { color: "red", fontWeight: "900", fontSize: "16px" }
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
