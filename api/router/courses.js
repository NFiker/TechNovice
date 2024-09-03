import { Router } from 'express';
import { coursesController } from '../controllers/coursesController.js'; // Corriger la casse du nom de fichier

const courseRouter = Router();

// Récupérer les informations de tous les cours
courseRouter.get('/courses', coursesController.getAllCourses);

// Récupérer les informations d'un seul cours via son id
courseRouter.get('/courses/:course_id(\\d+)', coursesController.getOneCourseById);

// Créer un cours
courseRouter.post('/courses', coursesController.createCourse);

// Mettre à jour un cours
//courseRouter.put('/courses/:course_id(\\d+)', coursesController.updateCourse);

// Supprimer un cours
//courseRouter.delete('/courses/:course_id(\\d+)', coursesController.deleteCourse);

export { courseRouter };
