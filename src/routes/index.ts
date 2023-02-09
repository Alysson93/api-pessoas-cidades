import { Router } from 'express';

//import { CidadesController } from '../controllers';
import CidadesController from '../controllers/CidadesController'


const router = Router();

//router.post('/cidades', CidadesController.create);
router.post('/cidades', new CidadesController().create);

export default router;