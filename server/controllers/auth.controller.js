const authUsers = require('../models/users')
const bcrypt = require('bcrypt');
const rounds = 10;
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.SECRET;
const Cookies = require('universal-cookie');

exports.getUsers = async (req, res) => {
    await authUsers.find()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).json(error);
        })
};

exports.getUserByName = async (req, res) => {

    try {
        const name = ({ username: req.params.username })
        const user = await authUsers.findOne(name)
        if(user.username != req.params.username) {
            return res.status(404).json({ message: "no user with that username" });

        } else {
            res.status(200).send({ user: user });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

exports.checkLogIn = (req, res) => {
    if(req.cookies.access_token) {
        res.json({ loggedIn: true })
    } else {
        res.json({ loggedIn: false })
    }
}

exports.logIn = (req, res) => {
    authUsers.findOne({ email: req.body.email })
        .then(user => {
            if(!req.body.email || !req.body.password) return res.status(400).json({ message: "fields can't be blank" })
            if (!user) return res.status(404).json({ error: 'no user with that email found' })
            else {

                bcrypt.compare(req.body.password, user.password, async (error, match) => {

                    if (error) return res.status(500).json(error)
                    else if (match) {
                        res.status(200).json({ status: 'Successful login', id: user.id, username: user.username, token: generateToken(user), isAuth: true })
                        
                    }
                    else return res.status(403).json({ error: 'passwords do not match' })
                })
            }
        })
        .catch(error => {
            return res.status(500).json({ message: error.message })
        })
};

exports.signUp = async (req, res, next) => {

    if(req.body.username == '' || req.body.email == '' || req.body.password == '') return res.status(400).json({ message: "fields can't be blank" })
  
    const usernameExists = await authUsers.exists({ username: req.body.username });
    const emailExists = await authUsers.exists({ email: req.body.email });

    if (usernameExists) {
        return res.status(400).json({ message: "username is taken"}) 
    }

    else if(emailExists) {
        return res.status(400).json({ message: "email already exists" })

    } else {
        bcrypt.hash(req.body.password, rounds, (error, hash) => {
            if (error) return res.status(500).json({ message: error.message })
            else {
                const newUser = authUsers({ role: req.body.role, username: req.body.username, email: req.body.email, password: hash })
                newUser.save()
                    .then(user => {
                        res.status(200).json({ status: 'SUCCESS', message: 'successful signup', id: user.id, username: user.username, email: user.email })
                    })
                    .catch( error => {
                        res.status(500).json(error.message)
                    })
                }
            })
        }
};

exports.updateUser = async (req, res) => {
    let userId = req.params.username;
    if(!userId) return res.status(404).json({ message: "can't find user" }) 

    if(!req.body.username) return res.json({ message: "can't leave fields blank "})

    if(req.body.username != null){
        res.user.username = req.body.username
    }

    try {
        const modifiedUser = await res.user.save();
        res.json(modifiedUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
            
exports.deleteAccount = async (req, res) => {
    try {
        await res.user.remove()
        res.status(200).json({ message: "account successfully deleted"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

function generateToken(user) {
    return jwt.sign({ _id: user._id, username: user.username, email: user.email , role: user.role }, tokenSecret, { algorithm: 'HS512' }, { expiresIn: '1h' });
};

exports.isAuth = (req, res, next) => {
    const cookies = new Cookies(req.headers.cookie);
    if(cookies.get("access_token")) {
        next()
    } else {
        res.status(403).json({ message: "must login"})
    }
}

// gets the data from the authorization header
// to check if the current user is who they say they are
exports.authenticateToken = (req, res, next) => {
    const required = req.headers.authorization;

    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required.split(' ')[1], tokenSecret, async (err, user) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = user

            verifier = await authUsers.findById({ _id: req.user._id})
            // console.log(req.user._id)

            if(req.user._id == verifier.id) {
                next()
            } else {
                res.status(401).json({ message: "unauthorized" })
            }
            next()
        })
    }
}
