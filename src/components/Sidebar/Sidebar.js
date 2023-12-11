import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="medlife_logo">
        <img src="./assets/medLife.png" alt="medlife" />
      </div>
      <div className="appoiment_btns">
        <button className="btn_appointment">
          <p>Add Clinical</p>
          <img src="./assets/downArrow.png" alt="arrow down" />
        </button>
        <button className="btn_dropdown">
          <img src="./assets/appoinmentIcon.png" alt="appoinment" />
          <p>Appoinments</p>
        </button>
        <button className="btn_dropdown btn_dropdown_selected">
          <img src="./assets/tasksIcon.png" alt="tasks" />
          <p>Tasks</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
