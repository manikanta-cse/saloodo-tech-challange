var health = require('./controllers/health');


async function get(app) {

    var reverseString = await require('./controllers/string-reverse');
    app.get('/api/string/reverse/:input', reverseString.get);
    app.get('/health', health.get);

    app.all('/api/*', function (req, resp) {
        resp.sendStatus(404);
    });

}

module.exports.get = get; 