import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const createToken = id => {
    return jwt.sign({ id }, 'secret', { expiresIn: '1h' });
};

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

            res.cookie('jwt', createToken(user.user_id));
            res.status(200).json({
                message: `Bienvenue ${user.first_name}`,
                cookie: createToken(user.user_id),
            });
        } catch (error) {
            return res.status(500).json({ message: 'Erreur lors de la connexion', error });
        } finally {
            prisma.$disconnect();
        }
    },

    async logout(req, res) {
        res.clearCookie('jwt');
        res.status(200).json({ message: 'Vous êtes déconnecté' });
    },
};

export { authController };
