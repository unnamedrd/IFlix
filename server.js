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
