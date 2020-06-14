const axios = require('axios');

export function getURL() {
  return axios.get("/teacher/createroom")
  .then(res => {
    return res.data;
  })
  .catch(err => console.log('error', err))
}

export function checkRoomExistance(roomKey){

  return axios.get("/teacher/findroom",{
    params:{id:roomKey}
  })
  .then(res => {
    return res;
  })
  .catch(err => console.log('error', err))
}