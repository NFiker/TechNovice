import { Router } from 'express';
import { commentsController } from '../controllers/commentsController.js';

const commentRouter = Router();

// MESSAGE SUR UN SUJET DANS LE FORUM

// Créer un message
commentRouter.post('/topics/:topic_id(\\d+)/message', commentsController.createComment);

// Modifier un message
commentRouter.patch('/topics/:topic_id(\\d+)/message/:com_id(\\d+)', commentsController.updateComment);

// Supprimer un message
commentRouter.delete('/topics/message/:com_id(\\d+)', commentsController.deleteComment);

export { commentRouter };
