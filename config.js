
var Twitter = require('twitter');

var cliente = new Twitter({
    consumer_key: "qXMzH3kIAEkxWODlkHLlqmszi",
    consumer_secret: "n3wZMr2TP5USTjSzyPDcA4Mmt3IusY6izxhipyQ4PVMBnDrp1n",
    access_token_key: "1053033018259062784-L0Zf7Xy1kCvss2ME42OM0zfioAHAPV",
    access_token_secret: "Xkob9Xytsin1TtNT56yI7LEdMGbWxPL7qW6glvWmkcvGN"
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