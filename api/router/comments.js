import { Router } from 'express';
import { commentsController } from '../controllers/commentsController.js';
import validators from '../middlewares/validator.js';


const commentRouter = Router();

// MESSAGE SUR UN SUJET DANS LE FORUM

// Créer un message
commentRouter.post(
    '/api/topics/:topic_id(\\d+)/message',
    validators('comments'),
    commentsController.createComment
);

// Modifier un message
commentRouter.patch('/api/topics/:topic_id(\\d+)/message/:com_id(\\d+)'
    ,validators('comments'),
    commentsController.updateComment);

// Supprimer un message
commentRouter.delete('/api/topics/message/:com_id(\\d+)',
    commentsController.deleteComment);

export { commentRouter };
