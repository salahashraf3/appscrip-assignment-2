import React from 'react'
import "./Upcoming.css"
import Search from '../../Search/Search';
import Card from '../../Card/Card';
import { upcomingTask } from "../../../constants/constant";

const Upcoming = () => {
  return (
    <section className="completed_container">
    <div className="task_list_top">
      <Search />
    </div>
    <div className="cards_container">
      {upcomingTask.map((detail, id) => {
        return (
           
                <Card
                key={id}
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
    </div>
  </section>
  )
}

export default Upcoming