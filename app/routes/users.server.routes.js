var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

module.exports = function (app) {


    app.route('/signup').get(users.renderSignup)
        .post(users.signup);

    app.route("/signin").get(users.renderSignin)
        .post(users.signin);

    app.get('/signout', users.signout);
};

