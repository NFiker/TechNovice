import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const loginController = {
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

            const jwToken = jwt.sign(
                {
                    id: user.user_id,
                    email: user.mail,
                },
                'secret',
                { expiresIn: '1h' },
            );

            return res.status(200).json({ message: `Bienvenue ${user.first_name}`, token: jwToken });
        } catch (error) {
            return res.status(500).json({ message: 'Erreur lors de la connexion', error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { loginController };
