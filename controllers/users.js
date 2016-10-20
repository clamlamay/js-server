var express = require('express');
var ctrl = express.Router();

var users = [
	{
		email: 'clam@ga.com',
		password: 'blah'
	},
	{
		email: 'khoff@ga.com',
		password: 'word'
	},
	{
		email: 'rmcbain@ga.com',
		password: 'what'
	}
];

function findUserById(id){
	var offsetIndex = id - 1;
	return users[offsetIndex];
};

/* GET users listing. */
ctrl.get('/', function(req, res, next) {
	res.json(users);	
});

ctrl.get('/:id', function(req, res, next){
	// console.log(req.params);
	var id = parseInt(req.params.id);
	if (typeof id === 'number'){
		res.json(findUserById(id));
	}
	res.json({});
		message: 'User not found"'
});

module.exports = ctrl;
