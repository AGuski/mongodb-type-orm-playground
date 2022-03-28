import {createConnection} from "typeorm";

console.log('starting ...');

const connection = await createConnection({
    type: "mongodb",
    host: "cluster0.33pph.mongodb.net",
    port: 3306,
    username: "thestoreroomguy",
    password: "d8ZU1zj1aSL7Vnd5",
    database: "myFirstDatabase"
});
