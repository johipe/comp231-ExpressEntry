var payment = require('../../app/controllers/payment.server.controller'),
    passport = require('passport');

module.exports = function(app) {
	app.route('/payment').get(payment.renderClientPayment)
        				 .post(payment.createPayment);

    app.route('/thankyou').get(payment.renderthankyou);

    app.route('/paymentdetails').get(payment.renderpaymentdetails);

};
