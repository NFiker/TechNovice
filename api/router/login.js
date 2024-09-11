import { Router } from 'express';
import { loginController } from '../controllers/auth/loginController.js';
import validators from '../middlewares/validator.js';

const loginRouter = Router();

loginRouter.post('/login', validators('comments'),loginController.login);

export { loginRouter };
