require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const meals = require('./routes/meal');
const cors = require('cors');

// const fs = require('fs');
// const path = require('path');
// const multer = require('multer');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database!'))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth', auth);
app.use('/meals', meals);

const PORT = process.env.PORT || 3031;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

