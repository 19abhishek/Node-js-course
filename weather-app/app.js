const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=1bd589b2d867b96a13d5735042dc5f94&query=New%20Delhi";

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data);
});
