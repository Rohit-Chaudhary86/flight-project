const { Sequelize } = require("sequelize");
const CrudRepository = require("./crud-repo");
const { Flight, Airplane, Airport, sequelize, City } = require("../models");
const db=require('../models')
const {addRowLockOnFlights}=require('./queries')

class FlightRepo extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const response = await this.model.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          required: true,
          as: "airplaneDetail",
        },
        {
          model: Airport,
          required: true,
          as: "departureAirport",
          on: {
            col1: Sequelize.where(
              sequelize.col("Flight.departureAirportId"),
              "=",
              Sequelize.col("departureAirport.code")
            ),
          },
           include:{
            model:City,
            required:true,
            as:'city'
           },
        },
        {
          model: Airport,
          required: true,
          as: "arrivalAirport",
          on: {
            col1: Sequelize.where(
              sequelize.col("Flight.arrivalAirportId"),
              "=",
              Sequelize.col("arrivalAirport.code")
            ),
          },
           include:{
            model:City,
            required:true,
            as:'city'
           },
        },
      ],
    });
    return response;
  }
  async updateRemainingSeats(flightId,seats,dec=true){
    await db.sequelize.query(addRowLockOnFlights(flightId))
    const flight=await Flight.findByPk(flightId) 
      if(+dec){
        await flight.decrement('totalSeats',{by:seats})
      }else{
        await flight.increment('totalSeats',{by:seats})
      }
      
      return flight;
  }
}

module.exports = FlightRepo;
