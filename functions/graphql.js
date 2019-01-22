import fetch from "node-fetch";

const API_ENDPOINT = "https://bahnql.herokuapp.com/graphql";

const response_if_the_server_fails_again = "{\"data\":{\"routing\":[{\"parts\":[{\"from\":{\"name\":\"Hamburg Hbf\",\"__typename\":\"Station\"},\"to\":{\"name\":\"Frankfurt (Main) Hbf\",\"__typename\":\"Station\"},\"delay\":0,\"product\":{\"name\":\"ICE 773\",\"__typename\":\"Product\"},\"direction\":\"Stuttgart Hbf\",\"departingTrack\":{\"platform\":\"B06\",\"number\":\"14\",\"length\":438,\"height\":76,\"name\":\"Gleis 14\",\"__typename\":\"Track\"},\"arrivingTrack\":{\"platform\":\"B04\",\"number\":\"6\",\"length\":434,\"height\":76,\"name\":\"Gleis 6\",\"__typename\":\"Track\"},\"__typename\":\"RoutePart\"}],\"__typename\":\"Route\"}]}}";

exports.handler = async (event, context) => {
  // return { statusCode: 200, body: response_if_the_server_fails_again };

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
