var User = require('mongoose').model('User'),
    passport = require('passport');

exports.renderHomepage = function(req, res)
{
    res.render('homepage', {
        title: 'Home', 
        userFullName: req.user ? req.user.fullName: ''
    });
    console.log("-----"+req.user);
};

exports.renderAbout = function(req, res, next)
{
    res.render('about', {
        title: 'About Us', 
        msg:'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
        img:'/images/logo.png',
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderProjects = function(req, res, next)
{
    res.render('projects', {
        title: 'Projects', 
         userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderServices = function(req, res, next)
{
    res.render('services', {
        title: 'Services', 
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderContact = function(req, res, next)
{
    res.render('contact', {
        title: 'Contact Us', 
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderClihomepage = function(req, res, next)
{
    res.render('cli_homepage', {
        title: 'Client Homepage', 
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderLawhomepage = function(req, res, next)
{
    res.render('law_homepage', {
        title: 'Lawyer Homepage', 
        userFullName: req.user ? req.user.fullName: ''
    });
    
};


/*
exports.render = function(req, res){
    if(req.session.lastVisit)
    {
        console.log(req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    res.render('index',{
        title: 'Hello World',
       lastVisit: req.session.lastVisit
      // imgUrl: './img.logo.png'                    
    })
   // res.send('Hello World');      
};
*/