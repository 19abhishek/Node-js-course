const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYWJoaXNoZWswODE5IiwiYSI6ImNreXFxMzR6YzBtMHoydm12cWNmenA3ZjcifQ.MXOH-k1EnjqQIb4dnrAXWg";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to loaction service");
    } else if (response.body.features.length === 0) {
      callback(
        "Unable to find the location. Please enter some other location."
      );
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
