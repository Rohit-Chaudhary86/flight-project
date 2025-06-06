const {StatusCodes}=require('http-status-codes')
const { CityRepo } = require('../repositories');
const appError = require('../utils/errors/app-Error');

const cityRepo=new CityRepo();

async function createCity(data){
     try {
    const city=await cityRepo.create(data)
    return city;
   } catch  (error) {
    // console.log(error)
    // if(error.name=='SequelizeUniqueConstraintError')
    console.error("City Service Error:", error);
    if(error.name=='SequelizeValidationError'||error.name=='SequelizeUniqueConstraintError'){
        let explanation=[];
        error.errors.forEach((err) => {
            explanation.push(err.message)
        });
        console.log(explanation)
        throw new appError(explanation,StatusCodes.BAD_REQUEST);
        
    }
        throw new appError("Can't create a new city object",StatusCodes.INTERNAL_SERVER_ERROR);
   } 
} 

module.exports={
   createCity
}