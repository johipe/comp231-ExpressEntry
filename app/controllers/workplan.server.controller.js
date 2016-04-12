var workplan = require('mongoose').model('WorkPlan')
	    passport = require('passport');

exports.renderClientWorkplan = function(req, res, next)
{
    res.render('client/workplan', {
        title: 'Workplan',
        userid: req.user.id,
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    }); 
};

exports.createWorkplan = function(req,res,next) {
	var workp = new createWorkplan(req.body);
    
	workp.save(function(err) {
		if(err) {
			return next(err);
		} else {
			return res.redirect('/thankyou');
		}
	});
};


