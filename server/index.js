const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.DB_URI)
.then(()=>console.log('Database Connected'))
.catch(err => console.log('Error connecting to DB'));

let server = app.listen(PORT,()=>{
    console.log(`Node server running on port: ${PORT}`);
});