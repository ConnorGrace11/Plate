const authUsers = require('../models/auth.users')
const bcrypt = require('bcrypt');
const rounds = 10;
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.SECRET;


// need to fix
exports.getUsers = async (req, res) => {
    let required = req.headers.authorization
    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required.split(' ')[1], tokenSecret, (err, value) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = value.data
        })
    }

    await authUsers.find()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).json(error);
        })
};

exports.getUserById = async (req, res) => {
    let required = req.headers.authorization

    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required.split(' ')[1], tokenSecret, (err, userData) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = userData.data 
        })
    }

    try {
        const user = await authUsers.findById(req.params.id)
        if(user.id != req.params.id) {
            return res.status(400).json({ message: "not authorized" });

        } else {
            res.status(200).send(user);
        }

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

exports.logIn = (req, res) => {
    authUsers.findOne({ email: req.body.email })
        .then(user => {
            if (!user) return res.status(404).json({ error: 'no user with that email found' })
            else {
                bcrypt.compare(req.body.password, user.password, (error, match) => {
                    if (error) return res.status(500).json(error)
                    else if (match) res.status(200).json({ status: 'Successful login', id: user.id, token: generateToken(user) })
                    else return res.status(403).json({ error: 'passwords do not match' })
                })
            }
        })
        .catch(error => {
            return res.status(500).json({ message: error.message })
        })
};

exports.signUp = (req, res) => {
    
    bcrypt.hash(req.body.password, rounds, (error, hash) => {
        if (error) return res.status(500).json({ message: error.message })
        if (req.body.email == authUsers.find(req.body.email)) return res.status(401).json({ message: 'email already exists' })
        else {
            const newUser = authUsers({ username: req.body.username, email: req.body.email, password: hash })
            newUser.save()
                .then(user => {
                    res.status(200).json({ status: 'SUCCESS', message: 'successful signup', id: user.id, username: user.username, email: user.email, token: generateToken(user) })
                })
                .catch( error => {
                    res.status(500).json(error.message)
                })
            }
        })
};

exports.getProtected = (req, res) => {
    let required = req.headers.authorization

    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required.split(' ')[1], tokenSecret, (err, userData) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = userData.data 
        })
    }

}

exports.logoutUser = async (req, res) => {
    try{
        req.authUsers.token = req.user.token.filter((token) => {
            return token.token != req.token
        })
        await req.authUsers.save()
        res.send()
    } catch (error){
        res.status(500).send(error)
    }
}

exports.updateUserName = (req, res) => {
//     let required = req.headers.authorization
//     // Checks token and tries to authenticate it
//     if(!required) {
//         return res.status(500).json({ message: "no token provided" })
//     } else {
//         jwt.verify(required.split(' ')[1], tokenSecret, (err, userData) => {
//             if (err) return res.status(500).json({ error: 'failed to authenticate token' })
//             req.user = userData.data 
//         })
//     }
//     // patch username , password
//     //Checks for id parameter
//     let userId = req.params.id;
//     if(!userId){
//         return res.status(404).json({ message: "no id provided" })
//     }
//     //finds the user by id
//     const newName = req.body.username
//     if (req.body.username == authUsers.find(req.body.username)) return res.status(401).json({ message: 'email already exists' })
//     try {
//         const user = await authUsers.findById(req.params.id)
//         if(user.id != req.params.id) {
//             return res.status(400).json({ message: "not authorized" });

//         } else {
//             res.status(200).send(user);
//         }

//     } catch (error) {
//         return res.status(400).json({ message: error.message })
//     }
}
            
// exports.tester = (req, res) => {
//     res.status(200).json(req.user);
// };

function generateToken(user) {
    return jwt.sign({ data: user }, tokenSecret, { expiresIn: '1h' });
};
