var mongojs = require('mongojs');
var db = mongojs("mongodb://admin:admin@ds141464.mlab.com:41464/hcoder", ["users"]);

module.exports = function(app) {
	app.post("/signMeUp", function(req, res) {
		res.setHeader('Content-Type', 'application/json');

		let requestObj = req.body;
		let response = "Error";

    	if(requestObj.username && requestObj.fullName && requestObj.email && requestObj.pass) {

    		db.users.save({fullName: requestObj.fullName, username: requestObj.username, email: requestObj.email, password: requestObj.pass},
    			function(err, data) {
    				if(err) throw err;

    				console.log(data);
    			});


    		response = "Ok";
    	}

    	requestObj.response = response;
		res.send(JSON.stringify(requestObj));
	});

    app.post("/signMeIn", function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        let requestObj = req.body;
        let email = requestObj.email;
        let password = requestObj.password;

        db.users.find({$or: [{username: email, password: password}, {email: email, password: password}]}, function(err, data) {
            if(err) throw err;

            res.send(JSON.stringify(data));
        });

        
    });
}
