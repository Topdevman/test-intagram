const express = require('express');
const router = express.Router();
const path = require('path');
const Client = require('instagram-private-api').V1;
const fs = require('fs');

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

const app = express();

/* Create New User */
router.post('/newuser', (req, res) => {

    const newUser = req.body;
    const device = new Client.Device(newUser.username);   
    if (!fs.existsSync('./cookies')) {
        fs.mkdirSync('./cookies');
    }
    const storage = new Client.CookieFileStorage('./cookies/' + newUser.username + '.json');
    const session = new Client.Session(device, storage);
    new Client.AccountPhoneCreator(session)
        .setPhone(newUser.email)
        .setUsername(newUser.username)
        .setName(newUser.name)
        .setPassword(newUser.password)
        .setPhoneCallback(function() {
            return Promise.resolve("123456");
        })
        .register()
        .spread(function(account, discover) {
            console.log("Create Account", account);
            console.log("Discover Feed", discover);
        })    
    console.log(newUser.email);
});

module.exports = router;