require('dotenv').config()
require('express-async-errors');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const meals = require('./routes/meal');
const restaurants = require('./routes/restaurant');
const reviews = require('./routes/review');
const error = require('./middlewares/middleware.error');
const cors = require('cors');
const cookieParser = require('cookie-parser');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database!'))


app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET, POST, PATCH, DELETE"],
    credentials: true 
}));

app.use(cookieParser());

app.use('/public', express.static('public'));
app.use('/api/auth', auth);
app.use('/meals', meals);
app.use('/restaurants', restaurants);
app.use('/reviews', reviews);
app.use(error);


const PORT = process.env.PORT || 3031;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

