require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const meals = require('./routes/meal');
const restaurants = require('./routes/restaurant');
const reviews = require('./routes/review');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database!'))

// const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET, POST, PATCH, DELETE"],
    credentials: true 
}));

app.use(cookieParser());
// app.use(session({
//     key: "user",
//     secret: "secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         expires: 60 * 60 * 8
//     }
// }))

app.use('/public', express.static('public'));
app.use('/api/auth', auth);
app.use('/meals', meals);
app.use('/restaurants', restaurants);
app.use('/reviews', reviews);

const PORT = process.env.PORT || 3031;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

