import { Router } from 'express';
import { userController } from '../controllers/usersController.js';

const userRouter = Router();

// Récupérer les informations de tous profils les pr
// ??? on n'a pas cette route dans les routes du cahier des charges ???
userRouter.get('/users', userController.getAllUsers);

// Récupérer les informations d'un seul profil 
// ??? on n'a pas cette route dans les routes du cahier des charges ???
userRouter.get('/users/:user_id(\\d+)', userController.getOneUserById);

// Créer un profil (inscription)
// POST /api/users  → Créer un compte utilisateur ( on doit ajouter api ou non ? )
userRouter.post('/users', userController.createUser);

// Modifier les informations du profil
//userRouter.patch('/users/:user_id(\\d+)', userController.updateUser);

// Supprimer un profil
//userRouter.delete('/users/:user_id(\\d+)', userController.deleteUser);

export { userRouter };
