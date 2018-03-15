const fetcher = require('axios');
const pageSpeed = require('./src/pageSpeed');
const persist = require('./src/db/persist');
require('dotenv').config();

pageSpeed(fetcher).then((speedScore) => persist('home', speedScore));
