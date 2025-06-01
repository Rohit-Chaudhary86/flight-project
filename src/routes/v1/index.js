const express=require('express')
const {infoController}=require('../../controller/index')

const router=express.Router();

router.get('/info',infoController.info);
module.exports=router;