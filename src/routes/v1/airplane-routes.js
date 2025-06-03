const express =require('express');
const {airplaneController}=require('../../controller')
const router=express.Router();

router.post('/',airplaneController.createAirplane)

module.exports=router;