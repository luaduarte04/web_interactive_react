import React from "react";

// import "components/Application.scss";
import Board from "./board/Board";
import useGameData from "../../hooks/useGameData"
import GameList from "./GameList"

export default function ClassRoom(props) {
  const {
    state, 
    flipCard,
    setGame
  } = useGameData();

  return (
    <>
      <section className="sidebar">
      <hr className="sidebar__separator sidebar--centered" />
      <div className="sidebar__menu" >
        <GameList
          game={state.game} 
          setGame={setGame}
          games={state.games}
        />
      </div>

      </section>
      <section className="schedule">
        <div>
          <Board 
            cards={state.cards}
            flipped={state.flipped}
            onClick={flipCard}
            disabled = {state.disabled}
            solved={state.solved}
          />
        </div>
      </section>
    </>
  );
}
