module.exports = function (app) {

    

    // create todo and send back all todos after creation
    app.post('/api/transcription', function (req, res) {

        // pass transcription to browser

    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
