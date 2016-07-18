var mongoose = require('mongoose');
var User = require('../datasets/users');
var TechnologyData = require('../datasets/technologyData');
var fs = require('fs-extra');
var path = require('path');
var parse = require('csv-parse');
var assert = require('assert');

var Converter = require("csvtojson").Converter;
var converter = new Converter({});
    
var csvData=[];
//mongoose.connect('mongodb://localhost/time-waste');

module.exports.uploadDataFile = function(req,res){  
    
    var file = req.files.file;
    var userId = req.body.userId;
    
    console.log("User " + userId + " is submitting " , file);
    var uploadDate = new Date();
   
    
    var tempPath = file.path;
    var targetPath = path.join(__dirname, "../../uploads/"+file.name);

    console.log("AfterRenamingfile");
    var savePath = "/uploads/"+file.name;
    console.log(targetPath);
    console.log(savePath);
    fs.rename(tempPath, targetPath, function (err){
        if (err){
            console.log(err)
        } else {
             console.log("File has been moved")
        }
    })

        //console.log(targetPath);
        converter.fromFile(targetPath,function(err,result){ 
        csvData = JSON.stringify(result);
        csvData = JSON.parse(csvData); 
        console.log("in parse operation",csvData);    
        TechnologyData.collection.insertMany(csvData, function(err,r) {
           console.log("Checking for erros",err);
           console.log("CHECKING FOR DATA",csvData);    
           assert.equal(null, err);
           //assert.equal(3, r.insertedCount);
           //db.close();
         if (err) {
            // TODO: handle error
        } else {
            //console.info('%d potatoes were successfully stored.', r.length);
        }
    })
})
}
