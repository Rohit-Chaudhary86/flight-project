const {StatusCodes}=require('http-status-codes')
const {ErrorResponse}=require('../utils/common')
const appError = require('../utils/errors/app-Error')

function ValidateCreateRequest(req,res,next){
   if(!req.body.name){
      ErrorResponse.message="something went wrong while creating city",
     
      ErrorResponse.error= new appError(["city name  not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   next()
}
module.exports={
    ValidateCreateRequest,
}