var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


router.post('/send',function(req, res, next){
	var transporter = nodemailer.createTransport({
		servise: 'Gmail',
		auth: {
			user: 'john@gmail.com',
			pass: 'password'
		}

	});

	var mailOptions = {
		from: 'John Doe <john@gmail.com>',
		to: 'admin@studio.com.ua',
		subject: 'Website submission',
		text: 'Letter .... Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message,
		html: '<p>  HIs Name: '+req.body.name+' </p>'


	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message sent'+info.resopnse);
			res.redirect('/contact');
		}
	});

} );


module.exports = router;