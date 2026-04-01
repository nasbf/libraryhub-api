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

const createUser = async (req, res) => {
    
    try {
        const user = new User(req.body);
        const data = await user.save();

        res.status(201).json({
            message: 'User created succesfully',
            data: data});
    } catch (error) {
        res.status(400).json({
        message: 'Error creating user',
        error: error.message
    });
  }
};


const updateUser = async (req, res) => {
    
    try {
        const update = await User.findByIdAndUpdate(
            req.params.id, req.body, 
            {new: true,
             runValidators: true
            });
        
        if (!update) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json({
            message: 'User updated succesfully',
            data: update});

    } catch (error) {
        res.status(500).json({
        message: 'Error updating user',
        error: error.message
    });
  }
}


const deleteUser = async (req, res) => {
    
    try {
        const deleteId = await User.findByIdAndDelete(
            req.params.id, req.body, 
            {new: true});
        
        if (!deleteId) {
            return res.status(404).json({ message: 'User not found' });
        }
        // console.log(deleteId);
        res.status(200).json({
            message: 'User deleted saccesfully',
            data: deleteId});

    } catch (error) {
        res.status(500).json({
        message: 'Error updating user',
        error: error.message
    });
  }
}





module.exports = {
    getAll,
    createUser,
    updateUser,
    deleteUser
};