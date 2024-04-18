const axios = require('axios');
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const { ServerConfig } = require('../config/');
const { BookingRepository } = require('../repositories');
const db = require('../models');

async function createBooking(data) {
    try {
        const result = await db.sequelize.transaction(async function bookingImpl(t){
            const flight = await axios.get(`http://${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
            const flightData = flight.data.data;
            console.log("Requested seats:", data.noofSeats);
            console.log("Total available seats:", flightData.totalSeats);
            if(data.noofSeats > flightData.totalSeats) {
                throw new AppError('Not Enough Seats are Available', StatusCodes.BAD_REQUEST);
            }
            return true;
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createBooking
};
