async function get(req, res, next) {

    try {
        var stringToReverse = req.params["input".trim()];
        if (!stringToReverse) {
            res.send(400);
        }
        res.send({ message: reverseAString(stringToReverse) });
    } catch (error) {
        res.status(500).send({ message: 'Error Occured' });

    }
};

function reverseAString(str) {
    if (!str) {
        return str;
    }
    return str.split("").reverse().join("");

}

module.exports.get = get;



