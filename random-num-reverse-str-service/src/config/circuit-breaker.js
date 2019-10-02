var Brakes = require('brakes');

function registerService(promiseFun, fallbackFun = null, healtCheckFun = null) {
    const brake = new Brakes(promiseFun, { timeout: 100 });

    if (fallbackFun) {
        brake.fallback(fallbackFun);
    }

    if (healtCheckFun) {
        brake.healthCheck(healtCheckFun);
    }
    return brake;
}

module.exports.register = registerService;