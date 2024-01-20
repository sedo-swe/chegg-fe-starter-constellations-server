const axios = require("axios");

const url = "http://localhost:5001/constellations";
// axios.get(url)
//   .then((response) => {
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.data);
//   }).catch((error) => {
//     console.log(error.message);
//   });

// Manipulate the data
axios
  .get(url)
  .then((response) => {
    const result = response.data.filter((constellation) => {
      return constellation.starsWithPlanets < 10;
    });
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Making complex requests
axios
  .post(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
  })
  .then((response) => {
    console.log(response.data);
  });

// Update ID from the result of above POST call
const idToDelete = "mY7hzfI";
axios.delete(`${url}/${idToDelete}`);

axios.get(`${url}/${idToDelete}`); // should return a 404 error, since the constellation was deleted in the previous API call