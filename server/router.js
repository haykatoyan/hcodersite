var mongojs = require('mongojs');
var db = mongojs("mongodb://admin:admin@ds141464.mlab.com:41464/hcoder", ["users"]);

var md5 = require('md5');

module.exports = function(app) {
	app.post("/signMeUp", function(req, res) {
		res.setHeader('Content-Type', 'application/json');

		var requestObj = req.body;
		var response = "Error";

        if(requestObj.username && requestObj.fullName && requestObj.email && requestObj.pass) {

            if(db.users.count({$or: [{"username": requestObj.username + ""}, 
                {"email": requestObj.email + ""}]}, function(err, count) {
                    if(err) throw err;

                    if(count > 0) {
                        response = "User exists";
                        requestObj.response = response;
                        res.send(JSON.stringify(requestObj));
                    } else {

                        db.users.save({fullName: requestObj.fullName, username: requestObj.username, email: requestObj.email, password: md5(requestObj.pass)},
                            function(err, data) {
                                if(err) throw err;
                            });

                        response = "Ok";

                        requestObj.response = response;
                        res.send(JSON.stringify(requestObj));
                    }

            }));
    	} else {
            requestObj.response = response;
            res.send(JSON.stringify(requestObj));
        }

        
	});

    app.post("/signMeIn", function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        var requestObj = req.body;
        var email = requestObj.email;
        var password = requestObj.password;

        db.users.find({$or: [{username: email, password: md5(password)}, {email: email, password: md5(password)}]}, function(err, data) {
            if(err) throw err;

            res.send(JSON.stringify(data));
        });
    });

    app.post("/getAllCodes", function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        db.codes.find({}, function(err, data) {
            if(err) throw err;

            res.send(data);
        });
    });
}
