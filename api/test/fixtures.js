import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createTestCourse() {
  return await prisma.courses.create({
    data: {
        course_id: 1,
        course_title: "Les fonctions de base Word",
        course_desc: "Comment écrire et mettre en forme un texte, comment mettre en forme les paragraphes ou imprimer, comprendre les icônes du ruban Accueil.",
        course_tags: [
            "Word", "Bureautique"
        ],
        course_content: "Windows vous permet d’accéder en un clic à l’aide d’un raccourci sur le bureau à un logiciel utilisé fréquemment.",
        author_user_id: 1,
    },
  });
}

export async function createTestUser () {
  return await prisma.users.create({
    data: {
      user_id: 1,
      nickname: "Camille9",
      mail: "camille9@gmail.com",
      password: "Camille23.02.99",
      first_name: "Camille",
      last_name: "Dupont",
      role_name: "apprenant",
    },
  })
}

export async function createTestTopic () {
  return await prisma.topics.create({
    data: {
      topic_id: 1,
      topic_title: "Comment faire pour que les pages soient pré-numérotés à l'ouverture d'un document vierge ?",
      topic_tag: [
            "word", "numérotés"
      ],
      topic_content: "Bonjour, j'ai besoin que ce soit automatique. Merci de me dire si cela est possible ou faut-il le faire manuellement chaque fois ?",
      author_user_id: 1,
    }
  });
}

export async function createTestComment() {
  const topic = await prisma.topics.create({
      data: {
        topic_id: 1,
        topic_title: "Comment faire pour que les pages soient pré-numérotés à l'ouverture d'un document vierge ?",
        topic_content: "This is a test topic"
      }
  });

  const comment = await prisma.comments.create({
      data: {
          topic_id: topic.topic_id,
          com_content: "Super sujet merci beaucoup",
          author_user_id: 1 
      }
  });

  return { topic_id: topic.topic_id, com_id: comment.com_id };
}

export async function createTestWatche() {
  const user = await prisma.users.create({
    data: {
      user_id: 1,
      nickname: "Camille9",
      mail: "camille9@gmail.com",
      password: "Camille23.02.99",
      first_name: "Camille",
      last_name: "Dupont",
      role_name: "apprenant",
    }
  });

  const course = await prisma.courses.create({
    data: {
      course_id: 1,
      course_title: "Les fonctions de base Word",
      course_desc: "Comment écrire et mettre en forme un texte, comment mettre en forme les paragraphes ou imprimer, comprendre les icônes du ruban Accueil.",
      course_tags: ["Word", "Bureautique"],
      course_content: "Windows vous permet d’accéder en un clic à l’aide d’un raccourci sur le bureau à un logiciel utilisé fréquemment.",
      author_user_id: user.user_id, 
    }
  });

  await prisma.watches.create({
    data: {
      course_id: course.course_id,
      user_id: user.user_id,
    }
  });
  
  return { course_id: course.course_id, user_id: user.user_id };
}

export async function createTestTeacher() {
  return await prisma.users.create({
    data: {
      user_id: 1,
      nickname: "Camille9",
      mail: "camille9@gmail.com",
      password: "camille230399",
      first_name: "Camille",
      last_name: "Dupont",
      role_name: "Professeur",
    },
  });
}