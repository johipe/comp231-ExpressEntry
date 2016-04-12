var config = require('./config'),
        mongoose = require('mongoose');
        
        module.exports = function() {
           // var db = mongoose.connect(config.db);
           var db = mongoose.connect(config.db);
            
            //check connection
            //var db2: mongoose.Connection = mongoose.connection;
            
            require('../app/models/user.server.model');
            require('../app/models/payment.server.model');
            require('../app/models/workplan.server.model');
<<<<<<< HEAD
            require('../app/models/assessment.server.model');
=======
>>>>>>> ff21cfd4f4798dbdc911213e6d09c6b8ae95ec89
            require('../app/models/applicant.server.model');
            return db;
        };