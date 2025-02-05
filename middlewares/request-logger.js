const info = (...params) => {
    if (process.env.NODE_ENV !== 'test') {
        console.log(...params)
    }
}

const requestLogger = (request, response, next) => {
    info('Method:', request.method);
    info('Path:  ', request.path);
    info('Body:  ', request.body);
    info('data:  ', request.data);
    info('Query: ', request.query);
    info('---');
    next();
}

module.exports = requestLogger