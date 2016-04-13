var assessment = require('../../app/controllers/assessment.server.controller'),
    passport = require('passport');

module.exports = function(app) {
	app.route('/assessment').get(assessment.renderClientAssessment)
        				 	.post(assessment.createAssessment);

    app.route('/assessmentthankyou').get(assessment.renderAssessmentThankyou);

    app.route('/assessmentdetails').get(assessment.renderassessmentdetails);

};
