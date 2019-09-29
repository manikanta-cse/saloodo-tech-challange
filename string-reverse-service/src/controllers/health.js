
async function get(req, res) {
    res.json({ "status": "UP" });
};

module.exports.get = get;