import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const coursesController = {
    async getAllCourses(req, res){
        const courses = await prisma.courses.findMany()
        res.json(courses)
     console.log(req.hostname)
    },

    async getOneCourseById (req, res){
        const id = req.params.course_id
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
            res.status(500).json({message: "Erreur lors de la récupération du cours", error})
        } finally {
            prisma.$disconnect();
        }
    }

}

export { coursesController };



