import { Router } from 'express';
import { topicController } from '../controllers/topicsController.js';

const topicRouter = Router();

// SUJET DANS LES FORUM

// Récupérer les informations de tous les sujets 
// ??? on n'a pas cette route dans les routes du cahier des charges ???
topicRouter.get('/topics', topicController.getAllTopics);

// Récupérer les informations d'un seul sujet via son id
topicRouter.get('/topics/:topic_id(\\d+)', topicController.getOneTopicById);

// Créer un sujet
//topicRouter.post('/topics/topic', topicController.createTopic);

// Mettre à jour un sujet
//topicRouter.patch('/topics/:topic_id(\\d+)', topicController.updateTopic);

// Supprimer un sujet
//topicRouter.delete('/topics/:topic_id(\\d+)', topicController.deleteTopic);

// MESSAGE SUR UN SUJET DANS LE FORUM 

// Accéder à un message
//topicRouter.get('/topics/:topic_id(\\d+)/messages/:com_id(\\d+)', topicController.getOneMessage);

// Créer un message
//topicRouter.post('/topics/:topic_id(\\d+)/messages', topicController.createMessage);

// Modifier un message
//topicRouter.patch('/topics/:topic_id(\\d+)/messages/:com_id(\\d+)', topicController.updateMessage);

// Supprimer un message
//topicRouter.delete('/topics/:topic_id(\\d+)/messages/:com_id(\\d+)', topicController.deleteMessage);

export { topicRouter };
