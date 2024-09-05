import { Router } from 'express';
import { userController } from '../controllers/usersController.js';

const userRouter = Router();

// Récupérer les informations de tous profils
userRouter.get('/users', userController.getAllUsers);

// Récupérer les informations d'un seul profil
userRouter.get('/users/:user_id(\\d+)', userController.getOneUserById);

// Créer un profil (inscription)
userRouter.post('/users', userController.createUser);

// Modifier les informations du profil
// userRouter.patch('/users/:user_id(\\d+)', userController.updateUser);

// Supprimer un profil
// userRouter.delete('/users/:user_id(\\d+)', userController.deleteUser);

export { userRouter };
