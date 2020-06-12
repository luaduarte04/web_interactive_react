import React from "react";
import GameListItem from "./GameListItem"

export default function GameList(props) {
   const {games, game, setGame} = props;
  return <ul>{games.map((item) =>
    <GameListItem
      key={item.id}
      title={item.title}
      description={item.description}
      type={item.type}
      level={item.level} 
      selected={item.id === game}
      setGame={() => setGame(item.id)}  />
  )}</ul>;
}
