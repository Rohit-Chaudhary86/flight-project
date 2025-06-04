const {StatusCodes}=require('http-status-codes')
const {AirplaneRepo}= require('../repositories');
const appError = require('../utils/errors/app-Error');
const airplaneRepo=new AirplaneRepo();

async function createAirplane(data){
   try {
    const airplane=await airplaneRepo.create(data)
    return airplane;
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
        throw new appError("Can't create a new airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAirplanes(){
    try {
        const airplanes=await airplaneRepo.getAll();
        return airplanes;
    } catch (error) {
        throw new appError("Can't fetch data of all planes ",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={createAirplane,getAirplanes}