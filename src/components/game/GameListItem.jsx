import React from "react";

export default function DayListItem(props) {
  let {title, description, type, level, setGame} = props
  return (
    <li className={"nothing"} onClick={setGame} data-testid="day">
      <h2 className="text--regular ">{title}</h2> 
      <h3 className="text--light">{description}</h3>
      <p>{type}</p>
      <p>{level}</p>
    </li>
  );
}