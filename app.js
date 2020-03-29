var app = require("./server");
var cliente = require("./config");
const cron = require("node-cron");
const cheerio = require('cheerio');
const request = require('request');

//Configura a porta disponível ou a porta 3000
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
//Configura o host disponível ou "0.0.0.0"
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, server_host, function () {
    console.log('Aplicação rodando !');
    let urls = [
                    "https://www.pensador.com/frases_de_reflexao/", 
                    "https://www.pensador.com/frases_de_reflexao/2", 
                    "https://www.pensador.com/frases_de_reflexao/3",  
                    "https://www.pensador.com/frases_de_reflexao/4"
                ];
    let responses = [];
    let completed_requests = 0; 
    let frases = [];

    for (i in urls) {
        request(urls[i], function (error, response, body) {
            let $ = cheerio.load(body);
                let res = $('p.fr').toArray().map((x) => { return $(x).text()});
                frases = [...frases, ...res];
                completed_requests++;
                if (completed_requests == urls.length) {
                    console.log('Numero de frases: ' +frases.length);
                }
        });
    }

    cron.schedule("*/30 * * * *", () => {
        const random_frase = frases[Math.floor(Math.random() * frases.length)];
        console.log("Executando cron...");
        cliente.tweetar(`"${random_frase}"\n-LuigiBoot v0.1`);                
    });


});




