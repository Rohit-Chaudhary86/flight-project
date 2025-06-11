const {StatusCodes}=require('http-status-codes')
const {ErrorResponse}=require('../utils/common')
const appError = require('../utils/errors/app-Error')

function ValidateCreateRequest(req,res,next){
     console.log(" Request body received:", req.body);
   if(!req.body.flightNumber){
      ErrorResponse.message="something went wrong while creating flight",
     
      ErrorResponse.error= new appError(["flightNumber not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   if(!req.body.airplaneId){
      ErrorResponse.message="something went wrong while creating flight",
     
      ErrorResponse.error= new appError(["airplaneId not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   if(!req.body.departureAirportId){
      ErrorResponse.message="something went wrong while creating flight",
     
      ErrorResponse.error= new appError(["departureAirportId not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   if(!req.body.arrivalAirportId){
      ErrorResponse.message="something went wrong while creating flight",
     
      ErrorResponse.error= new appError(["arrivalAirportId not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   if(!req.body.arrivalTime){
      ErrorResponse.message="something went wrong while creating flight",
     
      ErrorResponse.error= new appError(["arrivalTime not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   if(!req.body.departureTime){
      ErrorResponse.message="something went wrong while creating flight",
     
      ErrorResponse.error= new appError(["departureTime not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   if(!req.body.price){
      ErrorResponse.message="something went wrong while creating flight",
     
      ErrorResponse.error= new appError(["price not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   if(!req.body.bordingGate){
      ErrorResponse.message="something went wrong while creating flight",
     
      ErrorResponse.error= new appError(["bordingGate not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   if(!req.body.totalSeats){
      ErrorResponse.message="something went wrong while creating flight",
     
      ErrorResponse.error= new appError(["totalSeats not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   next()
}

function validateUpdateSeatsRequest(req,res,next){
   if(!req.body.seats){
      ErrorResponse.message="something went wrong while updating flight",
      ErrorResponse.error= new appError(["seats not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   next()
}

module.exports={
    ValidateCreateRequest,
    validateUpdateSeatsRequest
    
}