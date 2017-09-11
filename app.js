var express = require('express');
var path = require('path');
var constants = require("./constants");
var router = express.Router();
var app = express();

//set up router
app.use("/", router);
//set up public folder assets (CSS, PNG, etc)
app.use(express.static(path.join(__dirname, '/public')));

//set up each endpoint
router.get("/", function(req, res){
	res.sendFile(__dirname + "/views/one_col/index.html");
});

router.get("/2Coll", function(req, res){
	res.sendFile(__dirname + "/views/two_col/index.html");
	
});

router.get("/3Coll", function(req, res){
	res.sendFile(__dirname + "/views/three_col/index.html");
	
});

router.get("/4Coll", function(req, res){
	res.sendFile(__dirname + "/views/four_col/index.html");
	
});

router.get("/data", function(req, res){
	res.json(constants.TEST_DATA);
});
app.listen(process.env.PORT, function(){console.log('App is listening on port 3000')});