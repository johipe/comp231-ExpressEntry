var assessment = require('mongoose').model('Assessment')
	    passport = require('passport');

exports.renderClientAssessment = function(req, res, next)
{
    res.render('client/assessment', {
        title: 'Self-Assessment Form',
        userid: req.user.id,
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    }); 
};

exports.createAssessment = function(req,res,next) {
	var assess = new assessment(req.body);
    
	assess.save(function(err) {
		if(err) {
			return next(err);
		} else {
			return res.redirect('/assessmentthankyou');
		}
	});
};

exports.renderAssessmentThankyou = function(req, res, next)
{
    res.render('client/assessmentthankyou', {
        title: 'Assessment Results',
        message: 'completing the self-assessment',
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    }); 
};

exports.renderassessmentdetails = function(req, res, next)
{
    assessment.find({}, function(err, users){
        res.render('lawyer/assessmentdetails', {
            title: 'Self-Assessment Details', 
            users: users,
            role: req.user ? req.user.role: '',
            userFullName: req.user ? req.user.fullName: ''
        });
    }); 
};