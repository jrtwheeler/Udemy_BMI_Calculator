const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);

    var result = num1 / (num2 * num2);

    res.send("The result of the BMI calculation is " + result + ".");
})

app.listen(3000, function() {
    console.log("Server is running on local host 3000");
});