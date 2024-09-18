import { Router } from 'express';
import { userController } from '../controllers/usersController.js';
import  validators  from '../middlewares/validator.js';

const userRouter = Router();

// Récupérer les informations de tous profils
userRouter.get('/api/users', userController.getAllUsers);

// Récupérer les informations d'un seul profil
userRouter.get('/api/users/:user_id(\\d+)', userController.getOneUserById);

// Récupérer les informations de tous les professeurs
userRouter.get('/api/teachers', userController.getAllTeachers);

// Créer un profil (inscription)
userRouter.post('/api/users', validators('users'), userController.createUser);

// Modifier les informations du profil
userRouter.patch(
    '/api/users/:user_id(\\d+)',
    validators('users'), 
    userController.updateUser
);

// Supprimer un profil
userRouter.delete('/api/users/:user_id(\\d+)', userController.deleteUser);

export { userRouter };
