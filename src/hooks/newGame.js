
import {useState, useEffect} from "react"
import axios from "axios"

export default function useNewGameData() {
  const [state, setState] = useState({
    levels: [],
    subjects:[],
    grades: [],
    types: [],
  })
  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/days"),
  //     axios.get('/api/appointments'),
  //     axios.get('/api/interviewers')
  //   ])
  //   .then(res => setState(prev => ({ ...prev, days: res[0].data, appointments: res[1].data, interviewers: res[2].data })))
  //   .catch(err => console.log(err));
  // }, []);
  useEffect(() => {
    Promise.all([
      axios.get("/games/getLevels"),
      axios.get("/games/getSubjects"),
      axios.get("/games/getGrades"),
      axios.get("/games/getTypes")
    ])
    .then(res => {
      // console.log("first axios call useeffect")
      const levels = res[0].data;
      const subjects = res[1].data;
      const grades = res[2].data
      const types = res[3].data
      setState(prev => ({ ...prev, levels, subjects, grades,types}))
    })
    .catch(err =>  console.log(err));
  },[]);
  
  function saveNewGame(data) {
    return axios.post("/games/creategame", data)
    .then(res => console.log(res))
    .catch(err => console.timeLog(err))
  };
  console.log("state", state)
 
  return {state, saveNewGame}
}