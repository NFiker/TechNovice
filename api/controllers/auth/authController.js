import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const authController = {
    async login(req, res) {
        const { mail, password } = req.body;

        try {
            const user = await prisma.users.findUnique({
                where: { mail },
            });

            if (!user) {
                return res.status(400).json({ message: "Cet utilisateur n'existe pas" });
            }

            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.status(400).json({ message: 'Mot de passe incorrect' });
            }

            const jwToken = jwt.sign({ id: user.user_id }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1h',
            });

            return res.json({ jwToken });
        } catch (error) {
            return res.status(500).json({ message: 'toto', error });
        } finally {
            prisma.$disconnect();
        }
    },

    async logout(req, res) {
        res.clearCookie('jwt');
        res.status(200).json({ message: 'Vous êtes déconnecté' });
    },

    async myInfos(req, res) {
        const userId = req.user.user_id;

        try {
            const user = await prisma.users.findUnique({
                where: { user_id: userId },
            });

            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }

            return res.json(user);
        } catch (error) {
            return res
                .status(500)
                .json({ message: 'Erreur lors de la récupération des informations', error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { authController };
