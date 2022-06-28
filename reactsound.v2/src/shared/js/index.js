import axios from 'axios';

axios.get("http://localhost:3000/json/data.json").then(function(response) {
    console.log("Succes");
}).catch(function(error) {
    console.log(error)
}).then(function () {
    // always executed
  });

const baseAPI = axios.create({ timeout: 60000 });

export const getData = async (data) =>
  baseAPI.get(window.location.origin + "/json/" + data + ".json");
