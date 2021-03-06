var User = require('mongoose').model('User'),
	Applicant = require('mongoose').model('ApplicantDetails'),
    passport = require('passport');

var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Username already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

exports.renderSignin = function(req, res, next) {
	if (!req.user) {
		res.render('signin', {
			title: 'Sign-in Form',
			messages: req.flash('error') || req.flash('info'),
             userFullName: req.user ? req.user.fullName: ''
		});
    } else {

		return res.redirect('/homepage');
	}
};

exports.renderSignup = function(req, res, next) {
	if (!req.user) {
		res.render('signup', {
			title: 'Sign-up Form',
			messages: req.flash('error'),
             userFullName: req.user ? req.user.fullName: ''
		});
	} else {
		return res.redirect('/homepage');
	}
};

exports.signup = function(req, res, next) {
	if (!req.user) {
		var user = new User(req.body);
		var message = null;

		user.provider = 'local';

		user.save(function(err) {
			if (err) {
				var message = getErrorMessage(err);

				req.flash('error', message);
				return res.redirect('/signup');
			}
            
			req.login(user, function(err) {
				if (err) return next(err);
                else{
                    if(req.body.role == "client"){
                        return res.redirect('/cli_homepage');}
                    if(req.body.role == "lawyer"){
                        return res.redirect('/law_homepage');}   
                        
                     //return res.redirect('/homepage');
                    
                }
				
			});
		});
	} else {
		return res.redirect('/homepage');
	}
};

// authenticate user and redirect based on user role

exports.signin = function (req, res, next) {
  passport.authenticate('local', function(err, user, info) {

    if (err) { return next(err); }
    if (!user) { return res.redirect('/signin'); }

    req.logIn(user, function(err) {
		if (err) { return next(err); }
		if(user.role == "client") {
			return res.redirect('/cli_homepage');
		}// successRedirect:'/cli_homepage';}
		if(user.role == "lawyer") {
			return res.redirect('/law_homepage');  // redirects to lawyer dashboard
		}
    });
    
  })(req, res, next);
};  

// update applicant details

exports.addOrUpdateApplicant = function(req, res, next) {
	var applicantdetails = new Applicant(req.body);

	Applicant.findOneAndUpdate({userId: applicantdetails.userId},
		{
			$set: {
				firstname: applicantdetails.firstname,
				lastname: applicantdetails.lastname,
				email: applicantdetails.email,
				mobile: applicantdetails.mobile,
				address: applicantdetails.address,
				postalcode: applicantdetails.postalcode,
				status: applicantdetails.status,
				userId: applicantdetails.userId
			}
		}, 
		function(err, doc) {
		if(err) {
			return next(err);
		} else {

			if(doc){
				res.render('lawyer/lawyerThankyou', {
					title: 'Applicant details saved successfully',
		            role: req.user ? req.user.role: '',
		            userFullName: req.user ? req.user.fullName: ''
				});
			} else{
				applicantdetails.save(function(err) {
					if(err) {
						return next(err);
					} else {
						res.render('lawyer/lawyerThankyou', {
							title: 'Applicant details saved successfully',
							role: req.user ? req.user.role: '',
							userFullName: req.user ? req.user.fullName: ''
						});
					}
				});
			}
			
		}
	}); 
};
   
// redirect user to homepage when signing out

exports.signout = function(req, res) {
	req.logout();
	res.redirect('/homepage');
};

