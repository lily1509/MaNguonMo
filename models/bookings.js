const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customerName: String,
    phone: String,
    date: Date
});

module.exports = mongoose.model('Booking', bookingSchema);
