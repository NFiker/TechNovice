import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const authController = {
    
    // controller to connect
    async login(req, res) {
        const { mail, password } = req.body;

        try {
            const user = await prisma.users.findUnique({
                where: { mail },
            });

            if (!user) {
                return res.status(400).json({ message: "This user does not exist" });
            }

            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.status(400).json({ message: 'Incorrect password' });
            }
            console.log('Tentative de création du token');
            const jwToken = jwt.sign({ id: user.user_id }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1h',
            });
            console.log('Token créé');
            console.log(jwToken.data);
            return res.json({
                message: `Bienvenue ${user.first_name}`,
                jwToken,
            });
        } catch (error) {
            return res.status(500).json({ message: 'Error while connecting', error });
        } finally {
            prisma.$disconnect();
        }
    },

    // controller to disconnect
    async logout(req, res) {
        res.clearCookie('jwt');
        res.status(200).json({ message: 'You are logged out' });
    },

    // controller to register
    async myInfos(req, res) {
        const userId = req.user.user_id;

        try {
            const user = await prisma.users.findUnique({
                where: { user_id: userId },
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.json(user);
        } catch (error) {
            return res
                .status(500)
                .json({ message: 'Error retrieving information', error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { authController };
