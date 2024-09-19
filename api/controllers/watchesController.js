import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const watchesController = {
    
    // Create a new view
    createWatch: async (req, res) => {
        try {
            const { course_id, user_id } = req.params;
           // check if the course exists
            const course = await prisma.courses.findUnique({
                where: { course_id: parseInt(course_id) },
            });

            if (!course) {
                return res.status(404).json({ error: 'Course not found.' });
            }
            
           // Check if the user exists
            const user = await prisma.users.findUnique({
                where: { user_id: parseInt(user_id) },
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found.' });
            }

            const newWatch = await prisma.watches.create({
                data: {
                    course_id: parseInt(course_id),
                    user_id: parseInt(user_id),
                },
            });
            res.status(201).json(newWatch);
                
            } catch (error) {
                res.status(500).json({ message: 'Internal Server Error', error });
                if (error.code === 'P2002') {
                    return res.status(400).json({ message: 'view not created' });
                }
            } finally {
                prisma.$disconnect();
            }
        },

    // Delete a view
    deleteWatch: async (req, res) => {
        const { course_id, user_id } = req.params;
        try {
            const watch = await prisma.watches.findUnique({
                where: {
                    course_id_user_id: {
                        course_id: parseInt(course_id),
                        user_id: parseInt(user_id),
                    },
                },
            });

            if (!watch) {
                return res.status(404).json({ message: 'view not found' });
            }

            await prisma.watches.delete({
                where: {
                    course_id_user_id: {
                        course_id: parseInt(course_id),
                        user_id: parseInt(user_id),
                    },
                },
            });

            res.json(watch);
        } catch (error) {
            res.status(500).json({ message: 'view not delete', error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { watchesController };
