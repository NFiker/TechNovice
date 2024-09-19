import { Router } from 'express';
import { coursesController } from '../controllers/coursesController.js'; // Corriger la casse du nom de fichier
import validators from '../middlewares/validator.js';

const courseRouter = Router();

// Fetch data from all courses
courseRouter.get('/api/courses', coursesController.getAllCourses);

// Fetch data from a co
courseRouter.get('/api/courses/:course_id(\\d+)', coursesController.getOneCourseById);

// Créer un cours
courseRouter.post('/api/courses', validators('courses'), coursesController.createCourse);

// Mettre à jour un cours
courseRouter.patch('/api/courses/:course_id(\\d+)',validators('courses'), coursesController.updateCourse);

// Supprimer un cours
courseRouter.delete('/api/courses/:course_id(\\d+)', coursesController.deleteCourse);

export { courseRouter };
