const komada = require("komada");

const client = new komada.Client({
  ownerID : "470080379663941633",
  prefix: "+",
  clientOptions: {
    fetchAllMembers: false,
  },
  cmdLogging: true,
});

client.login("NDczMTMyMjYwMDg2OTA2ODkw.DkJcdQ.oeSQPVdh6nej90mzsGrE2XPav18");

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000); 