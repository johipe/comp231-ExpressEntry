var workplan = require('../../app/controllers/workplan.server.controller'),
    passport = require('passport');

module.exports = function(app) {
	app.route('/workplan').get(workplan.renderClientWorkplan)
        				 .post(workplan.createWorkplan);

    //app.route('/thankyou').get(payment.renderthankyou);

    //app.route('/paymentdetails').get(payment.renderpaymentdetails);

};
