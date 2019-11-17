var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{

	const iplocate = require('node-iplocate');
	var ip = require('public-ip');

(async () => {
    var fip = await ip.v4();
    iplocate(fip).then((results) => {
	  console.log(results);

	  var weather = require('weather-js2');
 
	// Options:
	// search: string           location name or zipcode
	// degreeType: string       F or C
	// resCount: int            Maximum number of results
	 
	weather.find({search: `${results.city}`, degreeType: 'C', resCount: 1}, function(err, result) {
	  if(err) console.log(err);
	 var weatherinfo = JSON.stringify(results, null, 2);
	  console.log(weatherinfo['current']);
	  

	  res.render('feeds', { city : results.city , info : weatherinfo , skytext :'Partly Sunny' });
	});
	  
	});

    

})(); 

	

});

module.exports = router;