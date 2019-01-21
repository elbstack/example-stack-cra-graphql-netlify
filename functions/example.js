import fetch from "node-fetch";

const API_ENDPOINT =
  "https://maker.ifttt.com/trigger/send_message/with/key/c6d5VNClNcsUl_Lk5qOPPo";

exports.handler = async (event, context) => {
  const message = event.queryStringParameters.msg || "Hello World";
  return fetch(API_ENDPOINT+`?value1=${message}`)
    .then(data => ({
      statusCode: 200,
      body: `fired`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};