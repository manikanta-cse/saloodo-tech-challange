var bodyParser = require('body-parser');

async function get(app, envConfig) {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.listen(envConfig['app_port'], '0.0.0.0');
    console.log(`Server started , Running on ${envConfig['app_port']}`);

};

module.exports.get = get;