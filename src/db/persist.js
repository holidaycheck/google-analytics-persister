const connect = require('./connect');

module.exports = (page, value) => {
    connect().writePoints([
        {
            measurement: 'speed_score',
            tags: { page },
            fields: { value }
        }
    ]).catch(err => {
        // eslint-disable-next-line no-console
        console.error(`Error saving data to InfluxDB! ${err.stack}`);
    });
};
