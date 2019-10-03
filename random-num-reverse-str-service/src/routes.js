var health = require('./controllers/health');
var stringReverse = require('./controllers/random-num-str-reverse');

async function get(app) {

    app.get('/api/string/reverse/:input/random/number', stringReverse.get);
    app.get('/health', health.get);

    app.all('/api/*', function (req, resp) {
        resp.sendStatus(404);
    });

};

module.exports.get = get;

