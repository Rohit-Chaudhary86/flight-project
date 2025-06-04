const express =require('express');
const {airplaneController}=require('../../controller')
const router=express.Router();
const {airplaneMiddlewares}=require('../../middlewares')

router.post('/',
    airplaneMiddlewares.ValidateCreateRequest,
    airplaneMiddlewares.ValidateCreateRequestCapacity,
    airplaneController.createAirplane)

module.exports=router;