import React from "react";
import "./Completed.css";
import Search from "../../Search/Search";
import Card from "../../Card/Card";
import { completedTask } from "../../../constants/constant";

const Completed = () => {
  return (
    <section className="completed_container">
      <div className="task_list_top">
        <Search />
      </div>
      <div className="cards_container">
        {completedTask.map((value, id) => {
          return (
            <>
              <h4 key={id} style={{ marginTop: "2%" }}>
                {value.date}
              </h4>
              {value.details.map((detail) => {
                return (
                  <Card
                    name={detail.name}
                    id={detail.id}
                    assessment={detail.assessment}
                    taskId={detail.taskId}
                    date={detail.date}
                    duration={detail.duration}
                    status={detail.status}
                    button={detail.button}
                  />
                );
              })}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Completed;
