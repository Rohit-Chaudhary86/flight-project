const express =require('express');
const {CityController}=require('../../controller')
const {CityMiddlewares}=require('../../middlewares')
const router=express.Router();


// /api/v1/cities  POST
router.post('/',CityMiddlewares.ValidateCreateRequest, CityController.createCity)

module.exports=router;