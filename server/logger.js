const { createLogger, format, transports, winston } = require('winston');
const { combine, timestamp, json } = format;
require('winston-mongodb');

const errorLog = createLogger({
    format: combine(
        timestamp(),
        json()
    ),
    transports: [
        new transports.File({
            filename:  ('logs/errors.log'),
            'timestamp':true,
            level: 'error'
        }),
    ],
    rejectionHandlers: [
        new transports.File({ 
            filename: ('logs/rejections.log'),
            'timestamp':true,
            handleRejections: true
        })
    ]
});

module.exports = function() {
    process.on('uncaughtException', (ex) => {
        logger.errorLog.error(ex.message, ex);
        process.exit(1);
    });

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    winston.add(transports.MongoDB, {
        db: process.env.DATABASE_URL,
        level: 'info'
    })

}

module.exports = {
    errorLog: errorLog, 
};