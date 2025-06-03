const express=require('express')
const {infoController}=require('../../controller/index')

const airpalRoutes=require('./airplane-routes')
const router=express.Router();

router.use('/airplanes',airpalRoutes);
router.get('/info',infoController.info);
module.exports=router;