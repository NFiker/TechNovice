import { PrismaClient } from '@prisma/client';
import Joi from 'joi';
const prisma = new PrismaClient();

const schema = Joi.object({

    // Contient une chaine obligatoire, doit contenir des caractères alphanumériques, au moins 3 caractères mais pas plus de 30
    nickname: Joi.string().alphanum().min(3).max(30).required(),
    first_name: Joi.string().min(3).max(30).required(),
    last_name: Joi.string().min(3).max(30).required(),
    role_name: Joi.string().min(3).max(30).required(),

    // une chaîne d'adresse e-mail valide doit avoir deux parties de domaine, par exemple@example.com et le TLD doit être .com ou .net ou .fr
    mail: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))  /* nouveau : ajout d'une regex stricte */
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } })
    .required(),
    // Une chaine facultative, doit satisfaire le modèle d'expression régulière personnalisé et doit être accompagné repeat_password et égal à celui-ci
    //^[a-zA-Z0-9]{8,30}$ : ^ et $ délimitent le début et la fin de la chaîne. 
    //[a-zA-Z0-9] correspond à toute lettre majuscule/minuscule et à tout chiffre.
    //{8,30} signifie que la longueur doit être comprise entre 8 et 30 caractères.
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    // Repeat password doit correspondre au mot de passe
   // repeat_password: Joi.string().valid(Joi.ref('password')).required()

})//.with('password', 'repeat_password') // Assure que repeat_password est présent avec password

    

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
                include: {
                    comments: true,
                    topics: true,
                    courses: true,
                    watches: true,
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
        try {
            const { error, value } = schema.validate(req.body);
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }
            const user = await prisma.users.create({
                data: value ,
            });
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la création du profil', error });
        } finally {
            prisma.$disconnect();
        }
    },

    async updateUser(req, res) {
        const id = parseInt(req.params.user_id);
        const { nickname, mail, password, first_name, last_name, role_name } = req.body;

        try {
            const user = await prisma.users.update({
                where: {
                    user_id: id,
                },

                data: {
                    nickname,
                    mail,
                    password,
                    first_name,
                    last_name,
                    role_name,
                },
            });
        

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la mise à jour du profil', error });
        } finally {
            prisma.$disconnect();
        }
    },
    // Controller pour supprimer un profil
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
            res.status(500).json({ message: "Erreur lors de la suppresion de l'utilisateur", error });
        } finally {
            prisma.$disconnect();
        }
    },
};

export { userController };
