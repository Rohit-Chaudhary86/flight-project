const {StatusCodes}=require('http-status-codes')
const {Op}=require('sequelize');
const FlightRepo=require('../repositories/flight-repo')
const appError = require('../utils/errors/app-Error');
const flightRepo= new FlightRepo();

async function createFlight(data){
      console.log("FlightService.createFlight called with data:", data);
   try {
    const flight=await flightRepo.create(data)
    console.log("Flight created:", flight);
    return flight;
   } catch (error) {
    console.log(' Error in flightRepo.create:', error);
    if(error.name=='SequelizeValidationError'){
        let explanation=[];
        error.errors.forEach((err) => {
            explanation.push(err.message)
        });
        console.log("Validation errors:", explanation);
        throw new appError(explanation,StatusCodes.BAD_REQUEST);
        
    }
        throw new appError("Can't create a new flight object",StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAllFlights(query){
    let customFilter={};
    let sortFilter=[];
    const endTripTime=" 23:59:59";
    if (query.trips) {
        [departureAirportId,arrivalAirportId]= query.trips.split("-");
        customFilter.departureAirportId=departureAirportId;
        customFilter.arrivalAirportId=arrivalAirportId;
        //add a check that they are not same  
     }
     if(query.price){
       [minPrice,maxPrice]=query.price.split("-");
        customFilter.price={
            [Op.between]:[minPrice,((maxPrice==undefined)? 20000:maxPrice)]
        }
     }
     if(query.travellers){
        customFilter.totalSeats={
            [Op.gte]: query.travellers
        }
     }
     if (query.tripDate) {
  const startDate = new Date(`${query.tripDate}T00:00:00.000Z`);
  const endDate = new Date(`${query.tripDate}T23:59:59.999Z`);
  customFilter.departureTime = {
    [Op.between]: [startDate, endDate],
  }
}
  if(query.sort){
    const params=query.sort.split(',');
    const sortFilters=params.map((param)=> param.split('_'));
    sortFilter=sortFilters
  }
     try {
         console.log("Custom Filter: ", customFilter);
        const flights=await flightRepo.getAllFlights(customFilter,sortFilter);
        return flights
     } catch (error) {
        throw new appError("Can't create a new flight object",StatusCodes.INTERNAL_SERVER_ERROR); 
     }
}

async function getFlight(id){
     try {
        
        const flight=await flightRepo.get(id);
        return flight;
    } catch (error) {
        
        throw new appError("Can't fetch data of flight ",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={createFlight,getAllFlights,getFlight}