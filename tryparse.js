
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/time-waste');
console.log()
var fs = require('fs'); 
var parse = require('csv-parse');
var assert = require('assert');
var path = require('path');
var TestFile = require('testfile');



var csvData=[];
var file = 'myfile.csv';
/*fs.createReadStream('myfile.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something wiht csvData
      console.log(csvData);
      //csvData.save();         
    });
    

db.TestFile.insertMany(csvData, function(err,r) {
       assert.equal(null, err);
       assert.equal(3, r.insertedCount);
          //db.close();
});
*/

converter.fromFile(file,function(err,result){ 
        csvData = JSON.stringify(result);
        csvData = JSON.parse(csvData); 
        console.log("in parse operation",csvData);    
        TestFile.collection.insertMany(csvData, function(err,r) {
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