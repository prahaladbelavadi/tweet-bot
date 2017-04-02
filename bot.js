var twit = require("twit");

var T = new twit({
    consumer_key: '-',
    consumer_secret: '-',
    access_token: '-',
    access_token_secret: '-',
    timeout_ms: 60*1000
});

T.post(
        'statuses/update',
    {
        status:'Hello World! Tweeting from the API xP'
    },
    function(err, data){
        console.log(data)
    }
);
