const authUsers = require('../models/users')
const bcrypt = require('bcrypt');
const rounds = 10;
const jwt = require('jsonwebtoken');
const { double } = require('webidl-conversions');
const { db } = require('../models/users');
const { check } = require('prettier');
const tokenSecret = process.env.SECRET;

exports.getUserByName = async (req, res) => {

    try {
        const name = ({ username: req.params.username })
        const user = await authUsers.findOne(name)
        if(user.username != req.params.username) {
            return res.status(400).json({ message: "no user with that username" });

        } else {
            res.status(200).send(user);
        }

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

// exports.getLoggedInStatus = async (req, res) => {
//     try {
//         const role = { role: 'guest' }
//         const user = await authUsers.find({ role: 'guest'} )

//         if(role == user) {
//             return res.status(400).json({ message: "not logged in, you need to login to view this" });

//         } else {
//             res.status(200).json({ message: "you're logged in and can view this" })
//         }

//     } catch (error) {
//         return res.status(400).json({ message: error.message })
//     }
// };

exports.logIn = (req, res) => {
    authUsers.findOne({ email: req.body.email })
        .then(user => {
            if (!user) return res.status(404).json({ error: 'no user with that email found' })
            // if(user.role != 'user' || 'admin') return res.status(403).json({ messsge: "you need to be signed in to view this"})
            else {
                bcrypt.compare(req.body.password, user.password, (error, match) => {
                    if (error) return res.status(500).json(error)
                    else if (match) {
                        // updateRole(user)
                        res.status(200).json({ status: 'Successful login', id: user.id, token: generateToken(user) })
                    }
                    else return res.status(403).json({ error: 'passwords do not match' })
                })
            }
        })
        .catch(error => {
            return res.status(500).json({ message: error.message })
        })
};

exports.logOut = async (req, res) => {
    
}


exports.signUp = async (req, res) => {

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
                        res.status(200).json({ status: 'SUCCESS', message: 'successful signup', id: user.id, username: user.username, email: user.email, token: generateToken(user) })
                    })
                    .catch( error => {
                        res.status(500).json(error.message)
                    })
                }
            })
        }
};

exports.updateUser = (req, res) => {
   let userId = req.params.id;
   if(!userId) return res.status(404).json({ message: "no id provided" }) 

   // patch username , password
   if(req.body.username != null){
       res.user.username = req.body.username
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

exports.authenticateToken = (req, res, next) => {
    const required = req.headers.authorization.split(' ')[1];
    
    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required, tokenSecret, (err, user) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = user
            next()
        })
    }
}

function generateToken(user) {
    return jwt.sign({ _id: user._id, username: user.username, email: user.email }, tokenSecret, { expiresIn: '1h' });
};

// async function updateRole(user, req, res) {
//     try {
//         // if(user.role == 'admin') return res.send("error")
//         const currentRole = await authUsers.findOne({ email: user.email })

//         const role = ({ role: currentRole.role });
//         const newRole = {$set: { role: "admin" } };

//         db.collection("users").updateOne(role, newRole)

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }  
// }
