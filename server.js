let express = require('express');

let app = express();
let PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routing/apiRoutes.js')(app)
require('./routing/htmlRoutes.js')(app)

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  