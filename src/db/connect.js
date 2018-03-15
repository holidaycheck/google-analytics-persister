const Influx = require('influx');
require('dotenv').config();

module.exports = () => new Influx.InfluxDB({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    schema: [
        {
            measurement: 'speed_score',
            fields: { value: Influx.FieldType.INTEGER },
            tags: ['page']
        }
    ]
});
