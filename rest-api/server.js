require('dotenv').config()

const { application } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users = require('./routes/users')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database!'))

app.use(express.json());
app.use('/api', users);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));