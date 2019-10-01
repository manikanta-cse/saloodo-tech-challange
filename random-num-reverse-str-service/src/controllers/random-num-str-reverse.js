const axios = require("axios");

async function get(envConfig) {

    var stringReverseApiUrl = process.env.STRING_REVERSE_API_BASE_URI + "/api/string/reverse";

    async function get(req, res, next) {

        if (!isInputValid(req)) {
            res.status(400).send({ message: "Bad input" });
        }

        try {
            var [randomNum, reversedString] = await Promise.all([generateRandomNumber(), reverseAString(req.params["input"])]);
            res.send({ message: reversedString, random: randomNum });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Oops! Something went wrong, please try again' });
        }


    };

    async function isInputValid(req) {
        return req.params["input"];
    }

    async function generateRandomNumber() {
        return Number(Math.random().toFixed(2));
    }

    async function reverseAString(inputString) {
        const response = await axios.get(`${stringReverseApiUrl}/${inputString}`);
        return response.data['message'];
    };



    return {
        get: get
    }

}

module.exports.get = get;