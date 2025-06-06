const { StatusCodes } = require("http-status-codes");

const { CityService } = require("../services");
const { error } = require("winston");
const {SuccessResponse,ErrorResponse}=require('../utils/common')

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name:req.body.name
    });
    SuccessResponse.data=city;
    return res
             .status(StatusCodes.CREATED)
             .json(SuccessResponse);
  } catch (error) {
     console.error("City Controller Error:", error);  
    ErrorResponse.error=error;
    return res
             .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
             .json(ErrorResponse);
  }
}

module.exports={
    createCity
}