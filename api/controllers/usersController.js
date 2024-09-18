import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const userController = {

    //Controller to get all the users
    async getAllUsers(req, res) {
        try {
            const users = await prisma.users.findMany();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving users', error });
        } finally {
            prisma.$disconnect();
        }
    },

    //Controller to get a user by id
    async getOneUserById(req, res) {
        const id = parseInt(req.params.user_id);
        try {
            const user = await prisma.users.findUnique({
                where: {
                    user_id: id,
                },
                include: {
                    comments: true,
                    topics: true,
                    courses: true,
                    watches: true,
                },
            });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving user", error });
        } finally {
            prisma.$disconnect();
        }
    },
    
    //Controller to get all teachers
    async getAllTeachers(req, res) {
        try {
            const teachers = await prisma.users.findMany({
                where: {
                    role_name: 'Professeur',
                },
            });

            if (!teachers) {
                return res.status(404).json({ message: 'Aucun enseignant trouvé' });
            }
            res.status(200).json(teachers);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération des enseignants', error });
        } finally {
            prisma.$disconnect();
        }
    },

    //Controller to create a user
    async createUser(req, res) {
        const { nickname, mail, password, first_name, last_name, role_name } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const foundNickname = await prisma.users.findUnique({ where: { nickname } });
            const foundMail = await prisma.users.findUnique({ where: { mail } });

            if (foundNickname) {
                return res.status(409).json({ message: "nickname already used" });
            }
           
            if (foundMail) {
                return res.status(409).json({ message: "mail already used" });
               
            }

            const user = await prisma.users.create({
                data: {
                    nickname,
                    mail,
                    password: hashedPassword,
                    first_name,
                    last_name,
                    role_name,
                },
            });
    

            res.status(201).json(user);
        } catch (error) {
            console.log("Error occurred:", error); 
            res.status(500).json({ message: 'user is not created', error });
        } finally {
            prisma.$disconnect();
        }
    },

    //Controller to edit a user
    async updateUser(req, res) {
        const id = parseInt(req.params.user_id);
        const { nickname, mail, password, first_name, last_name, role_name } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const foundUser = await prisma.users.findUnique({ where: { user_id: id } });

            if (foundUser === null) {
                return res.status(404).json({ message: 'User not found' });
            }
            
            const user = await prisma.users.update({
                where: {
                    user_id: id,
                },

                data: {
                    nickname,
                    mail,
                    password: hashedPassword,
                    first_name,
                    last_name,
                    role_name,
                },
            });

            delete user.password;
            res.status(200).json(user);
        } catch (error) {
            console.log("Error occurred:", error); 
            res.status(500).json({ message: 'Error while editing user', error });
        } finally {
            prisma.$disconnect();
        }
    },

    //Controller to delete a user
    async deleteUser(req, res) {
        const userId = parseInt(req.params.user_id);

        try {
            const user = await prisma.users.delete({
                where: {
                    user_id: userId,
                },
            });

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Error deleting user", error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { userController };
