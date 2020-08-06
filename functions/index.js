const functions = require("firebase-functions");

exports.ramdomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);
  response.send(number.toString());
});

exports.toTheDojo = functions.https.onRequest((request, response) => {
  response.redirect("https://google.com");
});

// http callable function

exports.sayHello = functions.https.onCall((data, context) => {
  return `hello, ${data.name}`;
});
