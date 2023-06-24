const express=require('express');
const router=express.Router();
const birdsControllers=require('../controllers/birdsControllers');


// App routes
router.get('/',birdsControllers.homepage);





module.exports=router;