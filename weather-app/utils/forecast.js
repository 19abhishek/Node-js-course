const request = require("request");

const forecast = (place, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=1bd589b2d867b96a13d5735042dc5f94&query=" +
    encodeURIComponent(place);

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to fetch geo-location");
    } else if (response.body.error) {
      callback("Please neter a valid address");
    } else {
      callback(undefined, response.body.current.temperature);
    }
  });
};

module.exports = forecast;
