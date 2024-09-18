import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const coursesController = {
    //controller pour récupérer tous les cours
    async getAllCourses(req, res) {
        try {
            const courses = await prisma.courses.findMany();
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving courses', error });
        } finally {
            prisma.$disconnect();
        }
    },
    //controller pour récupérer un cours par son id
    async getOneCourseById(req, res) {
        const id = parseInt(req.params.course_id);
        try {
            const course = await prisma.courses.findUnique({
                where: {
                    course_id: id,
                },
            });
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving course', error });
        } finally {
            prisma.$disconnect();
        }
    },

    // Controller pour créer un cours
    async createCourse(req, res) {
        const { course_title, course_desc, course_tags, course_content, author_user_id } = req.body;

        try {
            const course = await prisma.courses.create({
                data: { course_title, course_desc, course_tags, course_content, author_user_id },
            });

            res.status(201).json(course);
        } catch (error) {
            res.status(500).json({ message: 'Error creating course', error });
        } finally {
            prisma.$disconnect();
        }
    },

    // Controller pour modifier un cours
    async updateCourse(req, res) {
        const id = parseInt(req.params.course_id);
        const { course_title, course_desc, course_tags, course_content } = req.body;

        try {
            const course = await prisma.courses.update({
                where: {
                    course_id: id,
                },

                data: {
                    course_title,
                    course_desc,
                    course_tags,
                    course_content,
                },
            });

            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: 'Error updating course', error });
        } finally {
            prisma.$disconnect();
        }
    },

    // Controller pour supprimer un cours
    async deleteCourse(req, res) {
        const courseId = parseInt(req.params.course_id);

        try {
            const course = await prisma.courses.delete({
                where: {
                    course_id: courseId,
                },
            });

            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: 'Error deleting course', error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { coursesController };
