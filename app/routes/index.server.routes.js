module.exports = function(app) {
    var index = require ('../controllers/index.server.controller.js');
    
    // general routes
    app.get('/',index.renderHomepage);

    app.route('/homepage').get(index.renderHomepage);
    
    app.route('/about').get(index.renderAbout);
    
    app.route('/projects').get(index.renderProjects);
    
    app.route('/services').get(index.renderServices);
    
    app.route('/contact').get(index.renderContact);

    //routing for services list
     app.route('/immigrate').get(index.renderImmigrate);
     
     app.route('/work').get(index.renderWork);
     
     app.route('/study').get(index.renderStudy);
     
    // routes for client 
    app.route('/cli_homepage').get(index.renderClihomepage);

    // routes for lawayer
    app.route('/law_homepage').get(index.renderLawhomepage);    
    app.route('/edit/:id').get(index.renderLawEditApplicant);
    app.route('/create/:id').get(index.renderCreateAppPage);
        
};