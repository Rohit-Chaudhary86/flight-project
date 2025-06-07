const CrudRepository=require('./crud-repo')
const {Flight} =require('../models')

class FlightRepo extends CrudRepository{
    constructor(){
         super(Flight)
    }

    async getAllFlights(filter,sort){
        const response=await this.model.findAll({
            where :filter,
            order:sort
        });
        return response;
    }
}

module.exports=FlightRepo;