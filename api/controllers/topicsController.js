import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const topicController = {
    async getAllTopics(req, res){
        try {
            const topic = await prisma.topics.findMany();
            res.json(topic);
        } catch (error) {
            res.status(500).json({message: "Erreur lors de la récupération des sujets de discussion", error});
        } finally {
            prisma.$disconnect();
        }
    },

    async getOneTopicById (req, res){
        const id = parseInt(req.params.topic_id);
        try {
            const topic = await prisma.topics.findUnique({
                where: { 
                    topic: id,
                }
            })
            if (!topic) {
                return res.status(404).json({message: "Sujet de discussion non trouvé"});
            }
            res.json(topic);
        } catch (error) {
            res.status(500).json({message: "Erreur lors de la récupération du sujet de discussion", error});
        } finally {
            prisma.$disconnect();
        }
    },
    
    async createTopic (req, res){
        const { topic_title, topic_tag, topic_content, topic_date, user_id} = req.body;
        try {
            const topic = await prisma.topics.create({
                data: { topic_title, topic_tag, topic_content, topic_date, user_id}
            })
            if (!topic) {
                return res.status(404).json({message: "sujet non créé"});
            }
            res.json(topic);
        } catch (error) {
            res.status(500).json({message: "Erreur lors de la récupération du sujet", error});
        } finally {
            prisma.$disconnect();
        }
    }
}

export { topicController };



