const Reservations = require("../models/reservations");

const getAll = async (req, res) => {
    console.log('getting reservations ...')
    try {
        const reservations = await Reservations.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({
        message: 'Error retrieving reservations',
        error: error.message
        });
    }
};

const createReservation = async (req, res) => {
    
    try {
        const reservation = new Reservations(req.body);
        const data = await reservation.save();

        res.status(201).json({
            message: 'Reservation created succesfully',
            data: data});
    } catch (error) {
        res.status(400).json({
        message: 'Error creating reservation',
        error: error.message
    });
  }
};


const updateReservation= async (req, res) => {
    
    try {
        const update = await Reservations.findByIdAndUpdate(
            req.params.id, req.body, 
            {new: true,
             runValidators: true
            });
        
        if (!update) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        
        res.status(200).json({
            message: 'Reservation updated succesfully',
            data: update});

    } catch (error) {
        res.status(500).json({
        message: 'Error updating reservation',
        error: error.message
    });
  }
}


const deleteReservation = async (req, res) => {
    
    try {
        const deleteId = await Reservations.findByIdAndDelete(
            req.params.id, req.body, 
            {new: true});
        
        if (!deleteId) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        // console.log(deleteId);
        res.status(200).json({
            message: 'Reservation deleted saccesfully',
            data: deleteId});

    } catch (error) {
        res.status(500).json({
        message: 'Error updating reservation',
        error: error.message
    });
  }
}





module.exports = {
    getAll,
    createReservation,
    updateReservation,
    deleteReservation
};