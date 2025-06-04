const express=require('express')
const {infoController}=require('../../controller/index')

const airpalRoutes=require('./airplane-routes')
const cityRoutes=require('./city-routes')
const router=express.Router();

router.use('/airplanes',airpalRoutes);
router.use('/cities',cityRoutes);

router.get('/info',infoController.info);

// router.
module.exports=router;