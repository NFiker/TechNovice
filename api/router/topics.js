import { Router } from 'express';
import { topicController } from '../controllers/topicsController.js';

const topicRouter = Router();

// SUJET DANS LES FORUM

// Récupérer les informations de tous les sujets
topicRouter.get('/topics', topicController.getAllTopics);

// Récupérer les informations d'un seul sujet via son id
topicRouter.get('/topics/:topic_id(\\d+)', topicController.getOneTopicById);

// Créer un sujet
topicRouter.post('/topics', topicController.createTopic);

// Mettre à jour un sujet
topicRouter.patch('/topics/:topic_id(\\d+)', topicController.updateTopic);

// Supprimer un sujet
topicRouter.delete('/topics/:topic_id(\\d+)', topicController.deleteTopic);

export { topicRouter };
