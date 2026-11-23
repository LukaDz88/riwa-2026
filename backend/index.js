const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Parser za JSON podatke
app.use(bodyParser.json());

app.get("/api/hello", (req,res) => {
    //if (error) throw error;
    response.send("Pozdrav");
});

app.listen(port, function () {
    console.log('Node app is running on port '+ port);
});
