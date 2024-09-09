import { Router } from 'express';
import { commentsController } from '../controllers/commentsController.js';
import Validator from '../middlewares/validator.js';


const commentRouter = Router();

// MESSAGE SUR UN SUJET DANS LE FORUM

// Créer un message
commentRouter.post('/topics/:topic_id(\\d+)/message',Validator('comments'), commentsController.createComment);

// Modifier un message
commentRouter.patch('/topics/:topic_id(\\d+)/message/:com_id(\\d+)', commentsController.updateComment);

// Supprimer un message
commentRouter.delete('/topics/:topic_id(\\d+)/message/:com_id(\\d+)', commentsController.deleteComment);

export { commentRouter };
