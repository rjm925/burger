var connection = require("../config/connection.js");

var orm = {
	selectAll: function(col, table, cb) {
		var queryString = "SELECT ?? FROM ??;";
		connection.query(queryString, [col, table], function(err, result) {
			if (err) throw err;
			cb(result);
		})
	}
	insertOne: function(name) {
		var queryString = "INSERT INTO burger (name) VALUES (??);";
		connection.query(queryString, [name], function(err, result) {
			if (err) throw err;
		})
	}
	updateOne: function() {
		var queryString = 
	}
}