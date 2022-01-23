const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=1bd589b2d867b96a13d5735042dc5f94&query=New%20Delhi";

request({ url, json: true }, (error, response) => {
  if (error) {
    console.log("There was an error in fetching the data");
  } else {
    console.log(response.body.current);
  }
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJoaXNoZWswODE5IiwiYSI6ImNreXFxMzR6YzBtMHoydm12cWNmenA3ZjcifQ.MXOH-k1EnjqQIb4dnrAXWg";

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
