import React from "react";
// import "components/DayListItem.scss"
import classNames from "classnames";

export default function DayListItem(props) {
  // title={item.title}
  //     description={item.description}
  //     type={item.type}
  //     level={item.level} 
  //     selected={item.id === game}
  //     setGame
  let {title, description, type, level, selected, setGame} = props
  // let dayClass = classNames(
  //    "day-list__item",
  //     {
  //       "day-list__item--selected":selected,
  //       "day-list__item--full": spots ? false : true
  //     }
  //   ) 
    // function formatSports () {
    //   if (spots > 1 ) {
    //     return `${spots} spots remaining`
    //   }  
    //   if (spots === 1) {
    //     return "1 spot remaining"
    //   } 
    //   else {
    //     return  "no spots remaining"
    //   }
    // }
    // spots = formatSports();
  return (
    <li className={"nothing"} onClick={setGame} data-testid="day">
      <h2 className="text--regular ">{title}</h2> 
      <h3 className="text--light">{description}</h3>
      <p>{type}</p>
      <p>{level}</p>
    </li>
  );
}