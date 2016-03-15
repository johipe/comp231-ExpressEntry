module.exports = function(app) {
    var index = require ('../controllers/index.server.controller.js');
    app.get('/',index.renderHomepage);
    
    app.route('/homepage').get(index.renderHomepage);
    
    app.route('/about').get(index.renderAbout);
    
    app.route('/projects').get(index.renderProjects);
    
    app.route('/services').get(index.renderServices);
    
     app.route('/contact').get(index.renderContact);
     
     app.route('/cli_homepage').get(index.renderClihomepage);
     
     app.route('/law_homepage').get(index.renderLawhomepage);
        
};