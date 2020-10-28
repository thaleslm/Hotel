const Express = require("express");
const bodyParser = require('body-Parser');

const app = Express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./Controllers/AuthRegister.js')(app);
require('./Controllers/AuthLogin.js')(app);

app.listen(8080)