import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <section className="search_container">
      <div className="search_items_left">
        <button className="search_btn">
          <img src="./assets/searchIcon.png" alt="search" />
          <input type="text" placeholder="Search" />
        </button>
        <div className="calender_container">
            
          <button className="calender_btn">
            <img src="./assets/calender.png" alt="date" />
            <input type="text" placeholder="From date" />
          </button>
          <p>to</p>
          <button className="calender_btn">
            <img src="./assets/calender.png" alt="date" />
            <input type="text" placeholder="To date" />
          </button>
        </div>
        <div className="search_btn_group">
          <button className="btn_apply">Apply</button>
          <button className="btn_apply btn_reset">Reset</button>
        </div>
      </div>
      <div className="search_items_right">
        <button className="filter_btn">
            <img src="./assets/filter.png" alt="filter" />
            <p>Filter</p>
        </button>
      </div>
    </section>
  );
};

export default Search;
