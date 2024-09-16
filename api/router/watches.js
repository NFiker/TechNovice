import { Router } from 'express';
import { watchesController } from '../controllers/watchesController.js';
import validators from '../middlewares/validator.js';

const watchesRouter = Router();

// Ajouter un cours à la liste des cours commencés
watchesRouter.post(
    '/api/watches/courses/:course_id(\\d+)/users/:author_user_id(\\d+)', validators('watches'),
    watchesController.createWatch,
);

// Supprimer un cours commencé (parce qu'on l'a fini en fait tavu)
watchesRouter.delete(
    '/api/watches/courses/:course_id(\\d+)/users/:author_user_id(\\d+)',
    watchesController.deleteWatch,
);

export { watchesRouter };
