const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9000;

//middleware config
app.use(cors());
app.use(bodyParser.urlencoded({extended:true,limit:'20mb'}));
app.use(bodyParser.json({limit:'20mb'}));

app.use('/api/users', userRoutes);

mongoose.connect(process.env.DB_URI)
.then(()=>console.log('Database Connected'))
.catch(err => console.log('Error connecting to DB',err));

let server = app.listen(PORT,()=>{
    console.log(`Node server running on port: ${PORT}`);
});