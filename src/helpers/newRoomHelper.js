const axios = require('axios');
const instance = axios.create({
  withCredentials: true
})
export function getURL() {
  return instance.get("/teacher/createroom")
  .then(res => {
    return res.data;
  })
  .catch(err => console.log('error', err))
}

export function checkRoomExistance(roomKey,isTeacher){

  return instance.get("/teacher/findroom",{
    params:{id:roomKey,isTeacher}
  })
  .then(res => {
    return res;
  })
  .catch(err => console.log('error', err))
}