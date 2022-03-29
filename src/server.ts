import 'dotenv/config';
import { DataSource } from "typeorm";
import { Device } from './device.entity';
import { Cyborg } from './cyborg.entity';

console.log("starting ...");

const database = process.env.DATABASE;

const myDataSource: DataSource = new DataSource({
  type: "mongodb",
  host: process.env.HOST,
  port: 27017,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: database,
  entities: [Device, Cyborg]
});
myDataSource.initialize().then(() => {
  if (myDataSource.isInitialized) {
    console.log(`Database ${database} successfully connected.`);
    init();
  }
}, error => {
  console.log(`Database ${database} connection failed:`);
  console.log(error);
});



async function init() {
  // stuff
}