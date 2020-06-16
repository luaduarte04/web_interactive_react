import React, {useState} from "react";
// import "components/DayListItem.scss"
import classNames from "classnames";

import './GameListItem.scss'
import { Button } from "@material-ui/core";

export default function GameListItem(props) {
  const [showList, setShowList] = useState(false);
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

    const handleChange = (prev) => {
      setShowList((prev) => !prev);
    };
  
    const handleClose = () => {
      setShowList(false);
    };

  return (
    <li className="game-list-item" data-testid="day">
      <h2 onClick={ e => {e.preventDefault(); handleChange(e) }}>{title}
        { showList && 
          <div>
          <h3>DESCRIPTION:</h3>
          <p>{description}</p>
          <h3>TYPE:</h3>
          <p>{type}</p>
          <h3>LEVEL:</h3>
          <p>{level}</p>
          <Button
            onClick={setGame}
            variant="contained"
            color="primary"
            size="small"
            style={{margin: "15px 0px 10px 0px"}}
          >
            SELECT GAME
          </Button>
          </div> 
        }
      </h2>
    </li>
  );
}