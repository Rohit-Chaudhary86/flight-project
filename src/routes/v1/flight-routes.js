const express =require('express');
const {FlightController}=require('../../controller');
const router=express.Router();
const {FlightMiddlewares}=require('../../middlewares')

// /api/v1/flights  POST
router.post('/',
    FlightMiddlewares.ValidateCreateRequest,
    FlightController.createFlight);

    // /api/v1/flights  GET
router.get('/',
    FlightController.getAllFlights
);
 
   // /api/v1/flight/:id  GET
router.get('/:id',
    FlightController.getFlight
);

module.exports=router;