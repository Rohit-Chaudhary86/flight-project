const CrudRepository=require('./crup-repo')
const {Airplane} =require('../models')

class AirplaneRepo extends CrudRepository{
    constructor(){
         super(Airplane)
    }
}

module.exports={
    AirplaneRepo,
}