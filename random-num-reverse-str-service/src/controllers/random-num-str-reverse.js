const axios = require("axios");
var validator = require('validator');
var circuitBreaker = require('../config/circuit-breaker');

async function get(envConfig) {

    var stringReverseApiUrl = process.env.STRING_REVERSE_API_BASE_URI + "/api/string/reverse";

    async function get(req, res, next) {

        if (!isInputValid(req)) {
            res.status(400).send({ message: "Bad input, only strings are allowed (without spaces)" });
            return;
        }

        try {

            var circuitBreakerResponse = circuitBreaker.register(reverseAString, fallbackCall);

            var [reverseStringResp, randomNum] = await Promise.all([circuitBreakerResponse.exec(req.params["input"]), generateRandomNumber()]);

            res.send(getResult(reverseStringResp, randomNum));

        }
        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Oops! Something went wrong, please try again' });
        }

    };

    function getResult(reversedString, randomNum) {
        if (reversedString.hasOwnProperty('random')) {
            return reversedString;
        }
        else {
            reversedString['random'] = randomNum;
            return reversedString;
        }
    }

    function fallbackCall() {
        return { message: '', random: generateRandomNumber() };
    }

    function isInputValid(req) {
        return validator.isAlpha(req.params["input"]);
    }


    function generateRandomNumber() {
        return Number(Math.random().toFixed(2));
    }

    async function reverseAString(inputString) {
        const response = await axios.get(`${stringReverseApiUrl}/${inputString}`);
        return response.data;
    };
    return {
        get: get
    }

}

module.exports.get = get;