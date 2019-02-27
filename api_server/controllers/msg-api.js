const mongoose = require('mongoose');
const messageModel = mongoose.model('message');

// GET Request Handler
const getAllMessagesOrderedByLastPosted = (req, res) => {
    messageModel
        .find()
        .sort( {'_id': -1} )
        .exec( (err, messages) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json(messages);
            }
        });
};
// POST Request Handler
const addNewMessage = (req, res) => {
    res.status(200).send('Successful API POST Request');
};

module.exports = {
    getAllMessagesOrderedByLastPosted,
    addNewMessage
};