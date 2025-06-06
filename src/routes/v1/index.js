const express=require('express')
const {infoController}=require('../../controller/index')

const airpalRoutes=require('./airplane-routes')
const cityRoutes=require('./city-routes')
const router=express.Router();
const airportRoutes=require('./airport-routes')
router.use('/airplanes',airpalRoutes);
router.use('/cities',cityRoutes);

router.get('/info',infoController.info);
router.use('/airports',airportRoutes)

// router.
module.exports=router;