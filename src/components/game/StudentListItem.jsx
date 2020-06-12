import React from "react";
// import "components/DayListItem.scss"
import classNames from "classnames";

export default function StudentListItem(props) {
  console.log("player name",props.name)
  return (
      <p>{props.name}</p>
  );
}