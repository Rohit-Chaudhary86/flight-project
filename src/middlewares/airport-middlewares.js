const {StatusCodes}=require('http-status-codes')
const {ErrorResponse}=require('../utils/common')
const appError = require('../utils/errors/app-Error')

function ValidateCreateRequest(req,res,next){
     console.log("✅ Request body received:", req.body);
   if(!req.body.name){
      ErrorResponse.message="something went wrong while creating airport",
     
      ErrorResponse.error= new appError(["Mname not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   if(!req.body.code){
      ErrorResponse.message="something went wrong while creating airport",
     
      ErrorResponse.error= new appError(["Airport code not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   if(!req.body.cityId){
      ErrorResponse.message="something went wrong while creating airport",
     
      ErrorResponse.error= new appError(["cityId not found in the incoming request in correct form"],StatusCodes.BAD_REQUEST)
         return res.
                status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   next()
}





module.exports={
    ValidateCreateRequest,
    
}