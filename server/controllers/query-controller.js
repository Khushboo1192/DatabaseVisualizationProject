var mongoose = require('mongoose');
var User = require('../datasets/technologyData');

module.exports.queryNew = function(req,res){ 
    
    console.log(req.body);
    var technologyData = new User(req.body);
    user.save();
    
    res.json(req.body);
}

    

