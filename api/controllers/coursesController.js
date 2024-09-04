import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const coursesController = {
    async getAllCourses(req, res) {
        try {
            const courses = await prisma.courses.findMany();
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération des cours', error });
        } finally {
            prisma.$disconnect();
        }
    },

    async getOneCourseById(req, res) {
        const id = parseInt(req.params.course_id);
        try {
            const course = await prisma.courses.findUnique({
                where: {
                    course_id: id,
                },
            });
            if (!course) {
                return res.status(404).json({ message: 'Cours non trouvé' });
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération du cours', error });
        } finally {
            prisma.$disconnect();
        }
    },

    // Pour l'instant l'id du user doit être rentré dans le body il n'est pas présent en paramètre
    async createCourse(req, res) {
        let { course_title, course_desc, course_tags, course_content, author_user_id } = req.body;

        try {
            const course = await prisma.courses.create({
                data: { course_title, course_desc, course_tags, course_content, author_user_id },
            });

            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la création du cours', error });
        } finally {
            prisma.$disconnect();
        }
    },

    async updateCourse(req, res) {
        const id = parseInt(req.params.course_id);
        let { course_title, course_desc, course_tags, course_content, updated_at } = req.body;

        try {
            const courseExists = await prisma.courses.findUnique({
                where: {
                    course_id: id,
                },
            });

            if (!courseExists) {
                return res.status(404).json({ message: 'Cours non trouvé' });
            }

            const course = await prisma.courses.update({
                where: {
                    course_id: id,
                },
                data: {
                    course_title,
                    course_desc,
                    course_tags,
                    course_content,
                    updated_at,
                },
            });

            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la mise à jour du cours', error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { coursesController };
