const router=require('express').Router();
const authMiddleware=require('./../scr/middleware/middleware');
const pelisController=require('./../scr/controllers/controllers');

router.use('/peliculas',authMiddleware);

router.get('/peliculas',pelisController.mostrar);
router.post('/peliculas/agregar',pelisController.add);

module.exports=router;