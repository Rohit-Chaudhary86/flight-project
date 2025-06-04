const {StatusCodes}=require('http-status-codes')
const {ErrorResponse}=require('../utils/common')
const appError = require('../utils/errors/app-Error')

function ValidateCreateRequest(req,res,next){
   if(!req.body.modelNumber){
      ErrorResponse.message="something went wrong while creating airplane",
     
      ErrorResponse.error= new appError(["Model number not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   next()
}

function ValidateCreateRequestCapacity(req,res,next){
   if(!req.body.capacity){
      ErrorResponse.message="something went wrong while creating req",
      ErrorResponse.error={explanation:"Capacity not found in the incoming request in correct form"}
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   next()
}



module.exports={
    ValidateCreateRequest,
    ValidateCreateRequestCapacity
}