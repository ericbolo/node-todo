module.exports = function (app) {

    var conversation = {

	12345: {
		speakerID: "Jane",
		text: "Hello Tarzan"
	},

	123:{
		speakerID: "Tarzan",
		text: "Hello Jane"	
	}


    }

    // create todo and send back all todos after creation
    app.post('/api/transcription', function (req, res) {

        // pass transcription to browser
	var transcription = req.body

	conversation[transcription.timestamp] = {
		text: transcription.text,
		speakerID: transcription.speakerID	
	}

    });

    app.get('/api/conversation', function(req, res){

	res.json(conversation); 

    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
