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
            require('../app/models/applicant.server.model');
            return db;
        };