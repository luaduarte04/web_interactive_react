import React from 'react';
// import logo from './logo.svg';
import Board from './board/Board'
import './App.css';
import useGameData from "../hooks/useGameData"

// class App extends Component {
  // render() {
export default function App() {
  // const [cards, setCards] = useState([])
  // const [flipped, setFlipped] = useState([])
  // const [solved, setSolved] = useState([])
  // const [disabled, setDisabled] = useState(false)
  const {state, flipCard} = useGameData();
  return (
    <div>
      <Board 
        cards={state.cards}
        flipped={state.flipped}
        onClick={flipCard}
        disabled = {state.disabled}
        solved={state.solved}
      />
    </div>
  );
  // }
}

