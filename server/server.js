require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const meals = require('./routes/meal');
const https = require('https');
const fs = require('fs');
const cors = require('cors')

// const key = fs.readFileSync(process.env.KEY_PATH);
// const cert = fs.readFileSync(process.env.CERT_PATH);

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database!'))

app.use(cors());
app.use(express.json());
app.use('/api/auth', auth);
app.use('/meals', meals);

// const httpsServer = https.createServer({ key, cert }, app)

const PORT = process.env.PORT || 9443;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});
