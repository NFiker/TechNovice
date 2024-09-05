import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Exemple de requête pour récupérer tous les utilisateurs
    const allUsers = await prisma.courses.findMany();
    console.log(allUsers);
}

main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
