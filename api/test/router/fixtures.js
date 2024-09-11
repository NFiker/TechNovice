import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export  async function createTestCourses() {
  return await prisma.courses.create({
    data: {
        course_title: "Les fonctions de base Word",
        course_desc: "Comment écrire et mettre en forme un texte, comment mettre en forme les paragraphes ou imprimer, comprendre les icônes du ruban Accueil.",
        course_tags: [
            "Word", "Bureautique"
        ],
        course_content: "Windows vous permet d’accéder en un clic à l’aide d’un raccourci sur le bureau à un logiciel utilisé fréquemment.",
        author_user_id: 1
    },
  });
}

export async function createTestUsers () {
  return await prisma.users.create({
    data: {
      nickname: "Camille9" ,
      mail: "camille9@gmail.com",
      password: "camille230399",
      first_name: "Camille",
      last_name: "Dupont",
      role_name: "apprenant",
    },
  });
}

