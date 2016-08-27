module.exports = function (app) {

    var conversation = [

	{
		speakerID: "Jane",
		text: "Hello Tarzan",
		timestamp: "123"
	},
	{
		speakerID: "Tarzan",
		text: "Hello Jane",
		timestamp: "456"
	}


    ]

    app.post('/api/transcription', function (req, res) {

        // pass transcription to browser
	var transcription = req.body

	conversation.push({
		text: transcription.text,
		speakerID: transcription.speakerID,
		timestamp: transcription.timestamp
	})
	res.sendStatus(200)

    });

    app.get('/api/conversation', function(req, res){

	res.json(conversation); 

    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
