import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const NAV_ITEMS = [
    {
      item: "Dashboard",
      selected: false,
    },
    {
      item: "Patients",
      selected: false,
    },
    {
      item: "Human Resources",
      selected: false,
    },
    {
      item: "Clinical",
      selected: true,
    },
    {
      item: "Compliance",
      selected: false,
    },
    {
      item: "Billing",
      selected: false,
    },
    {
      item: "Reports",
      selected: false,
    },
  ];

  return (
    <header className="navbar_container">
      <div className="logo">
        <img src="./assets/icon.png" alt="logo" />
      </div>
      <div className="navbar_right">
        <div className="navbar_items">
          {NAV_ITEMS.map((value, id) => {
            return (
              <Link
                to={"#"}
                key={id}
                className={`navbar_item  ${
                  value.selected && "navbar_item_selected"
                }`}
              >
                {value.item}
              </Link>
            );
          })}
        </div>
        <div className="navbar_profile_side">
          <button className="btn_clocked">
            <img src="./assets/clockedIn.png" alt="btn" />
            <p>Clocked In</p>
          </button>

          <img src="./assets/help.png" alt="help" />
          <img src="./assets/notification.png" alt="bellicon" />

          <div className="profile">
            <img src="./assets/profileIcon.png" alt="profile" />
            <p>Account</p>
          </div>
          
        </div>
      </div>
      <div className="mobile_menu">
            <img src="./assets/hamburgerMenu.png" alt="menu icon" />
        </div>
    </header>
  );
};

export default Navbar;
