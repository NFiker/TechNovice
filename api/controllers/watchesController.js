import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const watchesController = {
    // Créer un nouveau watch
    createWatch: async (req, res) => {
        const { course_id, author_user_id } = req.params;

        try {
            const newWatch = await prisma.watches.create({
                data: {
                    course_id: parseInt(course_id),
                    author_user_id: parseInt(author_user_id),
                },
            });
            res.status(201).json(newWatch);
        } catch (error) {
            res.status(400).json({ message: error.message });
        } finally {
            prisma.$disconnect();
        }
    },

    // Supprimer un watch
    deleteWatch: async (req, res) => {
        const { course_id, author_user_id } = req.params;
        try {
            const watch = await prisma.watches.findUnique({
                where: {
                    course_id_author_user_id: {
                        course_id: parseInt(course_id),
                        author_user_id: parseInt(author_user_id),
                    },
                },
            });

            if (!watch) {
                return res.status(404).json({ message: 'Watch not found' });
            }

            await prisma.watches.delete({
                where: {
                    course_id_author_user_id: {
                        course_id: parseInt(course_id),
                        author_user_id: parseInt(author_user_id),
                    },
                },
            });

            res.json({ message: 'Watch deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { watchesController };