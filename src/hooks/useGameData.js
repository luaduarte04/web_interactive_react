
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
    disabled:false
  })
  useEffect(() => {
    // console.log("usegameData useeffect")
    axios.get("/games")
    .then(res => {
      const cardId = res.data[0].id;
      console.log("first axios call useeffect")
      setState(prev => ({ ...prev, games: res.data, game: cardId}))
      console.log(`state.game22: ${state.game}`,cardId)
    })
    .catch(err =>  console.log(err));
  }, []);
  useEffect(()=>{
    console.log("---------------------------------------------------------",state.game)
  },[state.game])
  // useEffect(() => {
    // console.log("loadGame useeffect")
  function newGame() {
    console.log(`newGame() state.game: ${state.game}`)
    return axios.get(`/games/${state.game}`)
    .then(res => {
      // console.log("second axios call useeffect")
      const initCards= initializeDeck(res.data.images)
      setState(prev => ({ ...prev, flipped:[], solved:[], disabled: false, cards: initCards}))
    })
    .catch(err => console.log(err));
  // }, [state.game]);
  }
  // useEffect(() => {
  //   setState( prev => ({...prev, cards:(initializeDeck())}))
  // }, [])

  // useEffect(() => {
  //   preloadImages()
  // }, state.cards.join(','))
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

  // function preloadImages() {
  //   state.cards.map(card => {
  //     const src = `${card.type}`
  //     new Image().src = src
  //   })
  // }

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
    // setFlipped([])
    // setDisabled(false)
  }
  const setGame = game => setState({...state, game});

  return {state,setRunningGame ,setGame, newGame, flipCard}
}