const express =require('express');
const {FlightController}=require('../../controller');
const router=express.Router();
const {FlightMiddlewares}=require('../../middlewares')

// /api/v1/flights  POST
router.post('/',
    FlightMiddlewares.ValidateCreateRequest,
    FlightController.createFlight);

    // /api/v1/flights?trips=DEL-BOM  GET
router.get('/',
    FlightController.getAllFlights
);
 
   // /api/v1/flight/:id  GET
router.get('/:id',
    FlightController.getFlight
);

// /api/v1/flights/:id/seats  PATCH 
router.patch('/:id/seats',
    FlightMiddlewares.validateUpdateSeatsRequest,
    FlightController.updateSeats
);

module.exports=router;