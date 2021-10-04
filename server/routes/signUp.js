const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const signUp = require('../models/user')

router.post('/signup', (req, res) =>{
    const signUpUser = new signUp({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router