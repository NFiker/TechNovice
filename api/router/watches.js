import { Router } from 'express';
import { watchesController } from '../controllers/watchesController.js';

const watchesRouter = Router();

// Ajouter un cours à la liste des cours commencés
watchesRouter.post(
    '/watches/courses/:course_id(\\d+)/users/:author_user_id(\\d+)',
    watchesController.createWatch,
);

// Supprimer un cours commencé (parce qu'on l'a fini en fait tavu)
watchesRouter.delete(
    '/watches/courses/:course_id(\\d+)/users/:author_user_id(\\d+)',
    watchesController.deleteWatch,
);

export { watchesRouter };
