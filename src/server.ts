import {createConnection} from "typeorm";

console.log('starting ...');

const connection = createConnection({
    type: "mongodb",
    host: "cluster0.33pph.mongodb.net",
    port: 27015,
    username: "thestoreroomguy",
    password: "d8ZU1zj1aSL7Vnd5",
    database: "myFirstDatabase"
}).then(connection => console.log(connection), error => console.log(error));

