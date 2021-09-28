require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))

// parse requests of content-type - application/json
app.use(express.json());

const userRoute = require('./routes/user.js')
app.use('/api', userRoute);

app.listen(process.env.PORT, () => { console.log("Server started: 3000") });
