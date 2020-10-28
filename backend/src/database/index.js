const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/my_database',{useMongoClient: true });

mongoose.Promise = global.Promise;
mongoose.connection;

module.exports = mongoose;
