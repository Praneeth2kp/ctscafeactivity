const express=require('express');
const router=express.Router();
const CommonControllers=require('../controllers/Controllers');


// App routes
router.get('/',CommonControllers.homepage);
// router.get('/',CommonControllers.plants);
router.get('/birds',CommonControllers.birds);
// router.get('/',CommonControllers.nature);






module.exports=router;