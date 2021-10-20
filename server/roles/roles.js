const Users = require("../models/users");

async function getAccessbile() {
    const accessible = []

    const userId = await Users.find()
    for(var i = 0; i < userId.length; i++) {
        accessible.push(userId._id);
    }
    console.log(accessible)
}
