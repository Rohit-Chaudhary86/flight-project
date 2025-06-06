const CrudRepository=require('./crup-repo')
const {Airport} =require('../models')

class AirportRepo extends CrudRepository{
    constructor(){
         super(Airport)
    }
}

module.exports={
    AirportRepo,
}