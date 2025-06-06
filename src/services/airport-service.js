const {StatusCodes}=require('http-status-codes')
const {AirportRepo}= require('../repositories');
const appError = require('../utils/errors/app-Error');
const airportRepo=new AirportRepo();

async function createAirport(data){
   try {
    const airport=await airportRepo.create(data)
    return airport;
   } catch (error) {
    // console.log(error)
    if(error.name=='SequelizeValidationError'){
        let explanation=[];
        error.errors.forEach((err) => {
            explanation.push(err.message)
        });
        console.log(explanation)
        throw new appError(explanation,StatusCodes.BAD_REQUEST);
        
    }
        throw new appError("Can't create a new airport object",StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAirplort(){
    try {
        
        const airport=await airportRepo.getAll();
        return airport;
    } catch (error) {
        
        throw new appError("Can't fetch data of all airports ",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id){
    try {
        const airport=await airportRepo.get(id);
         return airport;
       
       
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
           throw new appError('the airport you requested is not present',error.statusCode)
       }
        throw new appError("Can't fetch data of all airports ",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id) {
     try {
        
        const response=await airportRepo.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
           throw new appError('the airport you requested to delete is not present',error.statusCode)
       }
        throw new appError("Can't destroy airports ",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={createAirport,getAirport,getAirport,destroyAirport}