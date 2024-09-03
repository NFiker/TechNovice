import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const coursesController = {
    async getAllCourses(req, res){
        try {
            const courses = await prisma.courses.findMany();
            res.json(courses);
        } catch (error) {
            res.status(500).json({message: "Erreur lors de la récupération des cours", error});
        } finally {
            prisma.$disconnect();
        }
    },

    async getOneCourseById (req, res){
        const id = parseInt(req.params.course_id);
        try {
            const course = await prisma.courses.findUnique({
                where: { 
                    course_id: id,
                }
            })
            if (!course) {
                return res.status(404).json({message: "Cours non trouvé"});
            }
            res.json(course);
        } catch (error) {
            res.status(500).json({message: "Erreur lors de la récupération du cours", error});
        } finally {
            prisma.$disconnect();
        }
    },

    async createCourse (req, res){
        const { course_title, course_desc, course_tags, course_content, author_user_id } = req.body;
        try {
            const course = await prisma.courses.create({
                data: { course_title, course_desc, course_tags, course_content, author_user_id }
            })
            if (!course) {
                return res.status(404).json({message: "Cours non créé"});
            }
            res.json(course);
        } catch (error) {
            res.status(500).json({message: "Erreur lors de la récupération du cours", error});
        } finally {
            prisma.$disconnect();
        }
    }
}

export { coursesController };



