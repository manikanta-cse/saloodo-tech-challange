var bodyParser = require('body-parser');

function get(app) {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.listen(process.env.PORT || 8080, '0.0.0.0');
    console.log(`Server started , Running on ${process.env.PORT || 8080}`);

};

module.exports.get = get;