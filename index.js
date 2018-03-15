const fetcher = require('axios');
const pageSpeed = require('./src/pageSpeed');
require('dotenv').config();

pageSpeed(fetcher);
