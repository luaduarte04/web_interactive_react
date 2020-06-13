const axios = require('axios');

export function getURL() {
  return axios.get("/teacher/createroom")
  .then(res => {
    return res.data;
  })
}