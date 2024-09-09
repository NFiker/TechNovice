import { Router } from 'express';
import { topicController } from '../controllers/topicsController.js';

const topicRouter = Router();

// SUJET DANS LES FORUM

// Récupérer les informations de tous les sujets
topicRouter.get('/api/topics', topicController.getAllTopics);

// Récupérer les informations d'un seul sujet via son id
topicRouter.get('/api/topics/:topic_id(\\d+)', topicController.getOneTopicById);

// Créer un sujet
topicRouter.post('/api/topics', topicController.createTopic);

// Mettre à jour un sujet
topicRouter.patch('/api/topics/:topic_id(\\d+)', topicController.updateTopic);

// Supprimer un sujet
topicRouter.delete('/api/topics/:topic_id(\\d+)', topicController.deleteTopic);

export { topicRouter };
