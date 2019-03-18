const mongoose = require('mongoose');
const userModel = mongoose.model('user');

const registerNewUser = (req, res) => {
//     res.status(200).send('Successful API New User POST Request');
    userModel
        .findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) {
                res.status(404).json(err);
                return;
            }
            if (user) {
                res
                    .status(403)
                    .json({"api-msg": "email already exists"});
                return;
            }
            userModel
                .create(req.body, (err, user) => {
                    if (err) {
                        res.status(400).json(err);
                    } else {
                        res.status(201).json(user);
                    }
                });
        });
};

const loginUser = (req, res) => {
    res.status(200).send('Successful API Login User GET Request');
};

module.exports = {
    loginUser,
    registerNewUser
};