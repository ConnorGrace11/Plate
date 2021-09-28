require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users = require('./routes/users')
const auth = require('./routes/auth')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database!'))

app.use(express.json());
app.use('/api', users);
app.use('/api/auth', auth);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));