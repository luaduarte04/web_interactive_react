import React from "react";
// import "components/DayListItem.scss"
import classNames from "classnames";

export default function StudentListItem({name,setTurn, isTeacher}) {
  return (
      <p onClick={()=> isTeacher ? setTurn() : null}>{name}</p>
  );
}