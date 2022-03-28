import {createConnection, Connection} from "typeorm";

console.log('starting ...');

const connection: Connection = createConnection({
    type: "mongodb",
    host: "cluster0.33pph.mongodb.net",
    port: 27017,
    username: "thestoreroomguy",
    password: "d8ZU1zj1aSL7Vnd5",
    database: "myFirstDatabase"
}).then(connection => console.log(connection), error => console.log(error));

