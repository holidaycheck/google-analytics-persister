const R = require('ramda');

const pickSpeedScore = R.path(['data', 'ruleGroups', 'SPEED', 'score']);

module.exports = (fetcher) => {
    const urlToCheck = 'http://holidaycheck.de';
    const pageSpeedEndpoint = `https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=${urlToCheck}`;

    return fetcher(pageSpeedEndpoint).then(pickSpeedScore);
};
