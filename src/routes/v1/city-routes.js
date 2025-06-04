const express =require('express');
const {CityController}=require('../../controller')
const router=express.Router();


// /api/vi/airplanes  POST
router.post('/', CityController.createCity)

module.exports=router;