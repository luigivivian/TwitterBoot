
var Twitter = require('twitter');

var cliente = new Twitter({
    consumer_key: "",
    consumer_secret: "",
    access_token_key: "-L0Zf7Xy1kCvss2ME42OM0zfioAHAPV",
    access_token_secret: ""
});

cliente.tweetar = function (tweet) {
    console.log("tweet =", tweet); 
    cliente.post('statuses/update', { status: tweet }, function (error, tweet, response) {
        if (error) console.log("error", error);
        else
            console.log("Tweet enviado.");
    });
}
 
//Exporta o cliente
module.exports = cliente;
