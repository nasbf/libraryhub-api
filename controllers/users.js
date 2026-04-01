const User = require("../models/users");

const getAll = async (req, res) => {
    console.log('getting users ...')
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
        message: 'Error retrieving users',
        error: error.message
        });
    }
};
module.exports = {
    getAll
};