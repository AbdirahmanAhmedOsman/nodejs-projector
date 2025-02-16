const mongooseDB = require('mongoose');

const connectServer = async () =>{
    try{
        const url = process.env.MONGO_URI;
        const conn = await mongooseDB.connect(url);
        console.log(`Database connected ${conn.connection.host}`);
    } catch(err){
        console.log('Database Connection Field' , err.message)
    }

}

module.exports = connectDB;

const mongoose = require('mongoose');

