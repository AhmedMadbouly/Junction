var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{

	res.render('About', { title: 'About' });

});

module.exports = router;