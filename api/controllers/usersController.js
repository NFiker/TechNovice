import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userController = {
    async getAllUsers(req, res) {
        try {
            const users = await prisma.users.findMany();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error });
        } finally {
            prisma.$disconnect();
        }
    },

    async getOneUserById(req, res) {
        const id = parseInt(req.params.user_id);
        try {
            const user = await prisma.users.findUnique({
                where: {
                    user_id: id,
                },
            });
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur", error });
        } finally {
            prisma.$disconnect();
        }
    },

    async createUser(req, res) {
        const { nickname, mail, password, first_name, last_name, role_name } = req.body;
        try {
            const user = await prisma.users.create({
                data: { nickname, mail, password, first_name, last_name, role_name },
            });

            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération du profil', error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { userController };
