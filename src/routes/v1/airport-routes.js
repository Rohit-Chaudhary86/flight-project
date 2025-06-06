const express =require('express');
const AirportController=require('../../controller/airport-controller');
const router=express.Router();
const {AirportMiddlewares}=require('../../middlewares')

// /api/v1/airports  POST
router.post('/',
    AirportMiddlewares.ValidateCreateRequest,
    AirportController.createAirport)

// /api/v1/airports  GET
router.get('/',
    AirportController.getAirports)

// /api/v1/airports/:id  GET
router.get('/:id',
    AirportController.getAirport)

// /api/v1/airports/:id  DELETE
router.delete('/:id',
    AirportController.destroyAirport)
module.exports=router;