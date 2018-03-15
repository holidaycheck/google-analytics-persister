const connect = require('./connect');

connect().createDatabase(process.env.DB_NAME);
