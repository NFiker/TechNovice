import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const topicController = {
    //Controller to get all the discussion topics
    async getAllTopics(req, res) {
        try {
            const topic = await prisma.topics.findMany({
            });
            res.status(200).json(topic);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving discussion topics', error});
        } finally {
            prisma.$disconnect();
        }
    },
    
    //Controller to get a discussion topic by id
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
                return res.status(404).json({ message: 'Discussion topic not found' });
            }
            res.status(200).json(topic);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving discussion topic', error });
        } finally {
            prisma.$disconnect();
        }
    },

    //Controller to create a discussion topic
    async createTopic(req, res) {
        const { topic_title, topic_tag, topic_content, author_user_id } = req.body;
        try {
            const topic = await prisma.topics.create({
                data: { topic_title, topic_tag, topic_content, author_user_id },
            });
            
            res.status(201).json(topic);
        } catch (error) { 
            console.log(error);
            res.status(500).json({ message: 'Error creating topic', error });
           
        } finally {
            prisma.$disconnect();
        }
    },

  //Controller to edit a discussion topic
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
            res.status(500).json({ message: 'Error updating topic', error });
        } finally {
            prisma.$disconnect();
        }
    },

    //Controller to delete a discussion topic
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
            res.status(500).json({ message: 'Error deleting topic', error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { topicController };