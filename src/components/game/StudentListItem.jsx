import React from "react";
// import "components/DayListItem.scss"
import './StudentListItem.scss';

export default function StudentListItem({name,setTurn, isTeacher}) {
  return (
    <>
    <div
      className="student-item-container"
      onClick={()=> isTeacher ? setTurn() : null}
    >
      <div>
        <div className="student-avatar"></div>
      </div>
      <p>
        {name}
      </p>
    </div>
  </>
  );
}