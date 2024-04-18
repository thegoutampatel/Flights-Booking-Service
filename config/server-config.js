// const dotenv = require('dotenv');

// dotenv.config();

// module.exports = {
//     PORT: process.env.PORT,
//     FLIGHT_SERVICE: process.env.FLIGHT_SERVICE
// }

const dotenv = require('dotenv');

dotenv.config();

// Provide default values for environment variables if they're not set
const PORT = process.env.PORT || 4000; // Default to port 4000 if PORT is not set
const FLIGHT_SERVICE = process.env.FLIGHT_SERVICE || 'http://localhost:3000'; // Default to localhost:3000 if FLIGHT_SERVICE is not set

module.exports = {
    PORT,
    FLIGHT_SERVICE
};
