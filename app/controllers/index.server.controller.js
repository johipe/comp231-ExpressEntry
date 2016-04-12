var User = require('mongoose').model('User'),
    passport = require('passport');

exports.renderHomepage = function(req, res)
{
    res.render('homepage', {
        title: 'Home', 
        role: req.user ? req.user.role: '',
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
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderProjects = function(req, res, next)
{
    res.render('projects', {
        title: 'Projects', 
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderServices = function(req, res, next)
{
    res.render('services', {
        title: 'Services',
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderContact = function(req, res, next)
{
    res.render('contact', {
        title: 'Contact Us',
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderClihomepage = function(req, res, next)
{
    res.render('client/cli_homepage', {
        title: 'Client Homepage',
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

///////////////////////////////////////////////////////
// Lawyer Routes
//////////////////////////////////////////////////////

exports.renderLawhomepage = function(req, res, next)
{
    User.find({role:"client"}, function(err, users){
        var userArray = [];

        users.forEach(function(user) {
            userArray.push(user);
        });

        res.render('lawyer/law_homepage', {
            title: 'Lawyer Dashboard', 
            users: userArray,
            role: req.user ? req.user.role: '',
            userFullName: req.user ? req.user.fullName: ''
        });
    }); 
};

exports.renderLawEditApplicant = function(req, res, next)
{
    User.find({_id:req.params.id}, function(err, users){
        var userArray = [];

        users.forEach(function(user) {
            userArray.push(user);
        });

        res.render('lawyer/editApplicant', {
            title: 'Edit Applicant',
            role: req.user ? req.user.role: '',
            userFullName: req.user ? req.user.fullName: '',
            userId: userArray[0]._id,
            firstname:userArray[0].firstName,
            lastname:userArray[0].lastName,
            email:userArray[0].email
        }); 
    });
};

exports.renderSearchedDetails = function(req, res, next)
{


    console.log("reached");
    console.log(req.body.fname);
    console.log(req.body.lname);

    User.find({
        $or: [
        {firstName: req.body.fname ? req.body.fname : "",role:"client"},
        {lastName: req.body.lname ? req.body.lname : "",role:"client"},
        ]
    }, function(err, users){
        var userArray = [];

        users.forEach(function(user) {
            userArray.push(user);
        });

        res.render('lawyer/law_homepage', {
            title: 'Lawyer Dashboard', 
            users: userArray,
            role: req.user ? req.user.role: '',
            userFullName: req.user ? req.user.fullName: ''
        });
    }); 

    /*User.find({
        $or:[
            {firstName: req.params.fname ? req.params.fname : "", role:"client"}, 
            {lastname: req.params.lname ? req.params.lname : "", role:"client"}
        ]}, 
        function(err, users){
            var userArray = [];

            users.forEach(function(user) {
                userArray.push(user);
            });

            res.render('lawyer/law_homepage', {
                title: 'Lawyer Dashboard', 
                users: userArray,
                role: req.user ? req.user.role: '',
                userFullName: req.user ? req.user.fullName: ''
            });
    });*/
};

/*function callbackFunction(req, res, next, err, users){
    var userArray = [];

    users.forEach(function(user) {
        userArray.push(user);
    });

    res.render('lawyer/law_homepage', {
        title: 'Lawyer Dashboard', 
        users: userArray,
        role: req.user ? req.user.role: '',
        userFullName: req.user ? req.user.fullName: ''
    });
}*/


//control for services pages

exports.renderImmigrate = function(req, res, next)
{
    res.render('immigrate', {
        title: 'Immigrate', 
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderWork = function(req, res, next)
{
    res.render('work', {
        title: 'Work', 
        userFullName: req.user ? req.user.fullName: ''
    });
    
};

exports.renderStudy = function(req, res, next)
{
    res.render('study', {
        title: 'Study', 
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