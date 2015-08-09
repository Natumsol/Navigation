// 不同的路由应用不同的控制器
var users = require('../controllers/user.server.controller'),
	main = require('../controllers/main.server.controller'),
	passport = require('passport'),
	moment = require("moment")
module.exports = function(app) {
	app.route("/").get(main.index);
	app.route('/signup')
		.get(users.renderSignup)
		.post(users.signup);

	app.route('/signin')
		.get(users.renderSignin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
		}));

	app.get('/signout', users.signout);


};