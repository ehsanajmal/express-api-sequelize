const express = require('express');
const app = express();
const PORT = 4000;
const http = require('http');
require('./src/models/')
const mainRoutes = require('./src/api/v1/routes/')
require('dotenv').config();
app.use(express.json());

app.use('/api/v1', mainRoutes)



app.get('/', (req,res)=>{
    return res.status(200).json({msg:"Hello i am an api and wokring fine"})
})

// app.use('/api/v1',  );

app.listen(PORT, ()=>{
    console.log("Server is listening to", PORT)
});