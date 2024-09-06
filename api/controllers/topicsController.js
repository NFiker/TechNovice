import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const topicController = {
    async getAllTopics(req, res) {
        try {
            const topic = await prisma.topics.findMany();
            res.status(200).json(topic);
        } catch (error) {
            res.status(500).json({
                message: 'Erreur lors de la récupération des sujets de discussion',
                error,
            });
        } finally {
            prisma.$disconnect();
        }
    },

    async getOneTopicById(req, res) {
        const id = parseInt(req.params.topic_id);
        try {
            const topic = await prisma.topics.findUnique({
                where: {
                    topic_id: id,
                },
                include: {
                    comments: true,
                },
            });

            if (!topic) {
                return res.status(404).json({ message: 'Sujet de discussion non trouvé' });
            }

            res.status(200).json(topic);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération du sujet de discussion', error });
        } finally {
            prisma.$disconnect();
        }
    },

    async createTopic(req, res) {
        const { topic_title, topic_tag, topic_content, author_user_id } = req.body;
        try {
            const topic = await prisma.topics.create({
                data: { topic_title, topic_tag, topic_content, author_user_id },
            });
            console.log(topic);
            res.status(201).json(topic);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la création du sujet', error });
            console.log(error);
        } finally {
            prisma.$disconnect();
        }
    },

    async updateTopic(req, res) {
        const id = parseInt(req.params.topic_id);
        const { topic_title, topic_tags, topic_content, author_user_id } = req.body;

        try {
            const topic = await prisma.topics.update({
                where: {
                    topic_id: id,
                },
                data: {
                    topic_title,
                    topic_tags,
                    topic_content,
                    author_user_id,
                },
            });

            res.status(200).json(topic);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la mise à jour du cours', error });
        } finally {
            prisma.$disconnect();
        }
    },
    // Controller pour supprimer un sujet
    async deleteTopic(req, res) {
        const topicId = parseInt(req.params.topic_id);

        try {
            const topics = await prisma.topics.delete({
                where: {
                    topic_id: topicId,
                },
            });

            res.status(200).json(topics);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de suppresion du sujet', error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { topicController };
