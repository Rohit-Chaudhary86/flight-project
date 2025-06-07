const { StatusCodes } = require("http-status-codes");

const { FlightService } = require("../services");
const { error } = require("winston");
const {SuccessResponse,ErrorResponse}=require('../utils/common')

async function createFlight(req, res) {
  console.log(" createFlight controller invoked")
  try {
     console.log(" Creating flight with data:", req.body);
    const flight = await FlightService.createFlight({
      flightNumber:req.body.flightNumber,
      airplaneId:req.body.airplaneId,
      departureAirportId:req.body.departureAirportId,
      arrivalAirportId:req.body.arrivalAirportId,
      arrivalTime:req.body.arrivalTime,
      departureTime:req.body.departureTime,
      price:req.body.price,
      bordingGate:req.body.bordingGate,
      totalSeats:req.body.totalSeats
    });
       console.log("Flight created successfully:", flight);
    SuccessResponse.data=flight;
    return res
             .status(StatusCodes.OK)
             .json(SuccessResponse);
  } catch (error) {
     console.error("CREATE FLIGHT ERROR:", error);
    ErrorResponse.error=error;
    return res
             .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
             .json(ErrorResponse);
  }
}

async function getAllFlights(req,res){
  try { 
    const flights=await FlightService.getAllFlights(req.query)
    SuccessResponse.data=flights;
    return res
             .status(StatusCodes.CREATED)
             .json(SuccessResponse);
  } catch (error) {
     ErrorResponse.error=error;
    return res
             .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
             .json(ErrorResponse);
  }
}

module.exports = { createFlight,getAllFlights }
