let path = require("path");


module.exports = function (app) {
  
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.post("/survey", function (req, res) {
        res.send("POSTED!");
    });

    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};