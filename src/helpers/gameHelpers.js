const axios = require('axios');
const instance = axios.create({
  withCredentials: true
})
export function deleteGame(id) {
  return instance.delete("/games/deletegame",{data:{id}})
  .then(res => {
    console.log(res)
    return res.data;
  })
  .catch(err => console.log('error', err))
}
