const { StatusCodes } = require("http-status-codes");

const { airplaneService } = require("../services");
const { error } = require("winston");
const {SuccessResponse,ErrorResponse}=require('../utils/common')

async function createAirplane(req, res) {
  try {
    const airplane = await airplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data=airplane;
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

async function getAirplanes(req,res){
   try {
     const airplanes=await airplaneService.getAirplanes();
     SuccessResponse.data=airplanes;
      return res
             .status(StatusCodes.OK)
             .json(SuccessResponse);
   } catch (error) {
     ErrorResponse.error=error;
    return res
             .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
             .json(ErrorResponse);
   }
}

module.exports = { createAirplane,getAirplanes }
