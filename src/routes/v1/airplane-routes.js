const express =require('express');
const {airplaneController}=require('../../controller')
const router=express.Router();
const {airplaneMiddlewares}=require('../../middlewares')

// /api/vi/airplanes  POST
router.post('/',
    airplaneMiddlewares.ValidateCreateRequest,
    airplaneMiddlewares.ValidateCreateRequestCapacity,
    airplaneController.createAirplane)

// /api/vi/airplanes  GET
router.get('/',
    airplaneController.getAirplanes)

// /api/vi/airplane/:id  GET
router.get('/:id',
    airplaneController.getAirplane)

// /api/vi/airplane/:id  DELETE
router.delete('/:id',
    airplaneController.destroyAirplane)
module.exports=router;