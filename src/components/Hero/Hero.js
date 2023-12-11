import React, { useState } from "react";
import "./Hero.css";
import Sidebar from "../Sidebar/Sidebar";
import Completed from "../Tasks/Completed/Completed";
import Upcoming from "../Tasks/Upcoming/Upcoming";

const Hero = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  return (
    <section className="hero_container">
      <div className="hero_sidebar_container">
        <Sidebar />
      </div>
      <div className="hero_right_container">
        <div className="tasks_header">
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "600" }}>Tasks</h2>
            <p style={{ fontSize: "12px", marginTop: "2px", color: "#7e7e7e" }}>
              Clinical &gt; Tasks
            </p>
          </div>
          <div className="tasks_btns">
            <button
              className={`tasks_btn ${
                showCompleted ? "" : "tasks_btn_selected"
              }`}
              onClick={()=>setShowCompleted(false)}
            >
              Upcoming tasks
            </button>
            <button
              className={`tasks_btn ${
                showCompleted ? "tasks_btn_selected" : ""
              }`}
              onClick={()=>setShowCompleted(true)}
            >
              Completed tasks
            </button>
          </div>
        </div>
        <div className="task_list_container">
          {showCompleted ? <Upcoming /> : <Completed />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
