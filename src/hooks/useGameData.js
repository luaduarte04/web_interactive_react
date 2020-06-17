
import {useState, useEffect} from "react"
import axios from "axios"
import initializeDeck from "../deck"

export default function useGameData() {

  const [state, setState] = useState({
    game: 0,
    games:[],
    cards: [],
    flipped: [],
    solved:[],
    turn:0,
    requestGame: false,
    disabled:false
  })
  function fetchGameList(games) {
    axios.get("/games",{params:{games}})
    .then(res => {
      const cardId = res.data[0].id;
      setState(prev => ({ ...prev, games: res.data, game: cardId}))
    })
    .catch(err =>  console.log(err));
  };

  function newGame() {
    return axios.get(`/games/${state.game}`)
    .then(res => {
      const initCards= initializeDeck(res.data.images)
      setState(prev => ({ ...prev, flipped:[], solved:[], disabled: false, cards: initCards}))
    })
    .catch(err => console.log(err));
  }

  function setRunningGame(newState) {
    setState({...newState})
  }
  function sameCardClicked(id) {
    return state.flipped.includes(id)
  }

  function isMatch(id) {
    const clickedCard = state.cards.find(card => card.id === id)
    const flippedCard = state.cards.find(card => state.flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }
  function flipCard(id) {
    setState(prev => ({...prev,  disabled:true}))
    if (state.flipped.length === 0) {
      setState( prev => ({...prev, flipped: [id], disabled:false}))
    } else {
      if (sameCardClicked(id)) {
        setState(prev =>({...prev, disabled:false}))
        return
      }
      setState(prev => ({...prev, flipped:[state.flipped[0], id]}))
      if(isMatch(id)) {
        setState(prev =>({...prev, solved:[...state.solved,state.flipped[0], id]}))
        resetCards()  
      } else {
        setTimeout(resetCards, 1500)
      }
    }
  }


  function resetCards() {
    setState(prev =>({...prev, flipped: [], disabled:false}))
  }
  const setGame = game => setState({...state, game});
  const setRequestGame = val => setState({...state, requestGame:val});
  const setTurn = id => {setState({...state, turn:id})}
  return {state, fetchGameList, setTurn, setRunningGame ,setGame, newGame, setRequestGame, flipCard}
}