var bodyParser = require('body-parser');

async function get(app, envConfig) {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.listen(process.env.PORT || 8080, '0.0.0.0');
    console.log(`Server started , Running on ${process.env.PORT}`);

};

module.exports.get = get;