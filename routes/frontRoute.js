
module.exports = function(app) {

	var User = require('../db.js').User;
	var path = require('path');


	app.route('/')
       .get(function(req,res) {
       res.sendFile(path.resolve('views/index.html'));
	});

	/*註冊頁面*/
	app.route('/regeister')
	   .get( function(req,res) {	
       res.render('regeister', { title: 'Hello', message: 'Hello there!'});
	})
	   .post( function(req,res) {
		console.log("暱稱：" + req.body.nickname );
		console.log("帳號：" + req.body.account );
		console.log("密碼" + req.body.pwd );
		console.log("信箱：" + req.body.mail  );
       
        User.find({"account":req.body.account})
  	.then(data => {
  		console.log('check account used');
	  	if(data[0] !== undefined){
	  		console.log('data[0]:' + data[0]);
		  	res.end('this account is used')
		  }
	  })
		.then(() => {
			let user = new User({
				account: req.body.account,
				pwd: req.body.pwd,
			  mail: req.body.mail,
			  nickName: req.body.nickName
			  
			});
			user.save()
			.catch(err => console.log(err));
			res.redirect('/');
		})
   	.catch(err => console.log(err));
	});

	app.post('/login',function(req,res){
		console.log('reqbody:' + req.body);
      User.find({account:req.body.account})
		.then(data => {
			if(data[0] === undefined) {
				res.json({ result : 'fail' });
			}
			if (data[0].pwd === req.body.pwd) {
				req.session.user = req.body.account;//將會在cookie中存入token之後token回到server取值
			    res.json({ result : 'success', account : req.body.account });
			}else{
				res.json({ result : 'fail' });
			}
		})
     });  

	app.get('/testAjax',function(req,res){
       console.log(req);
      res.end("Hello Hello hi hi hi");
     });   
	
}