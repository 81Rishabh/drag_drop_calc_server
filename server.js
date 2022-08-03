const express = require('express');
const app = express();
require('dotenv').config({path : "./.env"});
const port = parseInt(process.env.PORT) || 8000;
const connectDb = require('./config/db');
const cors = require('cors');

// db configuration
connectDb();

app.use(cors());

// routes configure
app.use('/' , require('./routes/index'));


app.listen(port, () => {
    console.log("server is running on port " , port);
});