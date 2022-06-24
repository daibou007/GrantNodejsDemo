const request = require('request');

var appId = 999999;
var appSecret = "9999999";

var auth = appId + ":" + appSecret;
auth = new Buffer(auth).toString('base64');
auth = "Basic " + auth;
var name = "333";
var userId = 3333;

request({
    url: 'https://api.gobelieve.io/v2/auth/grant',
    method: 'POST',
    json: true,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': auth
    },
    body: { "user_name": name, "uid": userId }
}, function (err, res1, body) {
    if (err) {
        console.log(err);
    } else {
        console.log(body);
    }
});