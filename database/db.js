//we cant directly connect expresss to mongodb.we do it by mongoose
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const MONGODB_URI=`mongodb://${USERNAME}:${PASSWORD}@ac-htzhlpv-shard-00-00.mcbljaj.mongodb.net:27017,ac-htzhlpv-shard-00-01.mcbljaj.mongodb.net:27017,ac-htzhlpv-shard-00-02.mcbljaj.mongodb.net:27017/?ssl=true&replicaSet=atlas-11j5zk-shard-0&authSource=admin&retryWrites=true&w=majority`;


    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log(`Database connected successfully`);
    })
    mongoose.connection.on('disconnected', () => {
        console.log(`Dataabase disconnected`);
    })
    mongoose.connection.on(`error`, () => {
        console.log(`Error while connecting to the database`, error.message);
    })

}

export default Connection;