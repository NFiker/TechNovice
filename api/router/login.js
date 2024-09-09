import { Router } from 'express';
import { loginController } from '../controllers/auth/loginController.js';

const loginRouter = Router();

loginRouter.post('/login', loginController.login);

export { loginRouter };
