



// var mongo = require('mongodb');
// var Server = mongo.Server;
// var Db = mongo.Db;

// var server = new Server('ds117931.mlab.com',17931, {auto_reconnect : true});
// var db = new Db('mike01', server);

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mike:5603@ds117931.mlab.com:17931/mike01');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connect");
});

//用戶註冊
exports.User = mongoose.model('member', new mongoose.Schema({
  account:String,
  pwd: String,
  mail: String,
  nickname: String
 
}, { collection: 'member' }));



