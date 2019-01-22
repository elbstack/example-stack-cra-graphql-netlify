import fetch from "node-fetch";

const API_ENDPOINT = "https://bahnql.herokuapp.com/graphql";

exports.handler = async (event, context) => {
  try {
    console.log(event.body);

    return fetch(API_ENDPOINT, {
      method: "POST",
      body: event.body,
      headers: { "Content-Type": "application/json", accept: "*/*" }
    })
      .then(response => {
        console.log(response);
        if (response.status !== 200) {
          throw new Error("Error from bahnql endpoint");
        }
        return response.text();
      })
      .then(json => ({ statusCode: 200, body: json }))
      .catch(error => ({ statusCode: 422, body: String(error) }));
  } catch (e) {
    console.log(e);
    return { statusCode: 500, body: String(error) };
  }
};
