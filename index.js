'use strict'

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

mongoose.Promise = global.Promise;

mongoose.connection.on('error', function() {
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});

const conn = mongoose.createConnection("mongodb://localhost:27017/test");

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

conn.on('open', function () {
  conn.db.listCollections().toArray(function (err, names) {
    if (err) {
      console.log(err);
    } else {

      // var small = new Tank({ size: 'small' });
      // small.save(function (err) {
      //   if (err) return handleError(err);
      //
      //   // saved!
      // })
      console.log(err, names);
    }
    conn.close();
  });
});


// var small = new Tank({ size: 'small' });
// small.save(function (err) {
//   if (err) return handleError(err);
// })
//
// Tank.remove({}, function (err) {
//   if (err) return handleError(err);
//   // removed!
// });
