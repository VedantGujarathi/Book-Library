const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require("./routes/book-routes");
const cors = require('cors');

///5ZGt5RLklFzxfsbR

//middleware

app.use(express.json());
app.use(cors());
app.use("/books",router);



mongoose.connect(
    "mongodb+srv://admin:5ZGt5RLklFzxfsbR@cluster0.tla5a1w.mongodb.net/BookStore?retryWrites=true&w=majority"
    ).then(()=>console.log("Connected to Database"))
    .then(()=>{
        app.listen(5000);
    }).catch((err)=>console.log(err));

