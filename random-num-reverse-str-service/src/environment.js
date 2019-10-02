module.exports = {
    preprod: {
        reverseStringApiUrl: process.env.STRING_REVERSE_URI,
        app_port: process.env.PORT || 8080
    },
    prod: {
        reverseStringApiUrl: 'http://localhost:8090/api/string/reverse',
        app_port: process.env.PORT || 8080
    }


}