//first install express and all dependencies mongodb, nodemon, dotenv, express, CORS
//create dotenv file
//create gitignore file - put node packages and dotenv file in gitignore
//create connection string to mongoDB in dotenv
//in server.js - list out variables for dependcies and database

const express = require("express");
const app = express();
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const PORT = 8100;

let db, 
    dbConnectionStr = process.env.DB_STRING, 
    dbName = "sample_mflix", 
    collection

//get statement to connect to port 

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('movies')
    })


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(process.env.PORT || PORT, () => {
        console.log("The port is running ${PORT}, you betta go catch it")
    })