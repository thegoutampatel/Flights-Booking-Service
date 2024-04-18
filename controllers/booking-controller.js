const { StatusCodes } = require('http-status-codes');

const { BookingService } = require('../services');
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createBooking(req, res) {  
  try {
      console.log("Request Body:", req.body); // Log the entire request body
      console.log("Flight ID:", req.body.flightId); // Log the value of flightId

      const response = await BookingService.createBooking({
        flightId: req.body.flightid,
        userId: req.body.userId,
        noofSeats: req.body.noofSeats

      })
      SuccessResponse.data = response;
  
      return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createBooking
} 