var payment = require('mongoose').model('Payment')
	    passport = require('passport');

exports.renderClientPayment = function(req, res, next)
{
    res.render('client/payment', {
        title: 'Payment Form',
        userid: req.user.id,
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    }); 
};

exports.createPayment = function(req,res,next) {
	var pay = new payment(req.body);
    
	pay.save(function(err) {
		if(err) {
			return next(err);
		} else {
			return res.redirect('/thankyou');
		}
	});
};

exports.renderthankyou = function(req, res, next)
{
    res.render('client/thankyou', {
        title: 'Payment Confirmation',
        message: 'making a payment',
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    }); 
};

exports.renderpaymentdetails = function(req, res, next)
{
    payment.find({}, function(err, users){
        res.render('lawyer/paymentdetails', {
            title: 'Payment Details', 
            users: users,
            role: req.user ? req.user.role: '',
            userFullName: req.user ? req.user.fullName: ''
        });
    }); 
};

