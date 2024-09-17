import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const commentsController = {
    // Controller pour créer un message
    async createComment(req, res) {
        try {
            const { topic_id } = req.params;
            const { com_content, author_user_id } = req.body;
console.log('[---> [HERE] <---]:', true);
            // verifier si utilisateur existe
            const user = await prisma.users.findUnique({
                where: { user_id: parseInt(author_user_id) },
            });

            if (!user) {
                console.log(`[{user}]:`, user);
                return res.status(404).json({ error: 'Auteur non trouvé.' });
            }

            // Vérifier si le sujet existe
            const topic = await prisma.topics.findUnique({
                where: { topic_id: parseInt(topic_id, 10) },
            });

            if (!topic) {
                return res.status(404).json({ error: 'Sujet non trouvé.' });
            }

            const comment = await prisma.comments.create({
                data: {
                    com_content,
                    topic_id: parseInt(topic_id),
                    author_user_id: parseInt(author_user_id),
                },
            });

            res.status(201).json(comment);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la création du message', error });
        } finally {
            prisma.$disconnect();
        }
    },
    // Controller pour modifier un message
    async updateComment(req, res) {
        const topicId = parseInt(req.params.topic_id);
        const commentId = parseInt(req.params.com_id);

        const { com_content } = req.body;

        try {
            const comment = await prisma.comments.update({
                where: {
                    topic_id: topicId,
                    com_id: commentId,
                },

                data: {
                    com_content,
                },
            });

            res.status(200).json(comment);
           
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la mise à jour du message', error });
        } finally {
            prisma.$disconnect();
        }
    },
    // Controller pour supprimer un message
    async deleteComment(req, res) {
        const { com_id } = req.params;

        const comment = await prisma.comments.findUnique({
            where: {
                com_id: parseInt(com_id), 
            },
        });
        
        if (!comment) {
            return res.status(404).json({ message: 'Commentaire non trouvé' });
        }

        try {
            await prisma.comments.delete({
                where: {
                    com_id: parseInt(com_id), 
                },
               
            });
            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de suppresion du message', error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { commentsController };