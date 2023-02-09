import { Router } from 'express';
const router = Router();

import CidadesController from '../controllers/CidadesController'
router.post('/cidades', new CidadesController().create);

export default router;