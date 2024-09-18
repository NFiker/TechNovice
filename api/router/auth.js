import { Router } from 'express';
import { authController } from '../controllers/auth/authController.js';

const authRouter = Router();

authRouter.post('/login', authController.login);
authRouter.get('/logout', authController.logout);
authRouter.get('/my-infos', authController.myInfos);

export { authRouter };
