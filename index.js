const mongoose = require('mongoose');
const express = require('express');

const app = express();

//connecting our database
const password = "dvRFwCH9yeWRErJO";
const dbName = "BlogDb"
//const dbURL = "mongodb+srv://blog_user:" + password + "@cluster0.grs5zyl.mongodb.net/" + dbName + "?retryWrites=true&w=majority";

const dbURI = "mongodb+srv://blog_user:dvRFwCH9yeWRErJO@cluster0.grs5zyl.mongodb.net/BlogDb?retryWrites=true&w=majority";
//called connection function,then pass the URL and two objects 
mongoose.connect(dbURI, {useNewURLParser: true, useUnifiedTopology: true})
    //3000 is the port number
    .then((result) => app.listen(3000, (req, res)=>{
            console.log("connected to db listening on port 3000");
        }) 
    ).catch((error) => console.log(error))