module.exports = (fetcher) => {
    const urlToCheck = 'http://holidaycheck.de';
    const pageSpeedEndpoint = `https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=${urlToCheck}`;
    fetcher(pageSpeedEndpoint);
}