import type CourseTypes from './components/types/CourseTypes';
import type TopicTypes from './components/types/TopicTypes';
// import type TeacherTypes from './components/reusable-ui/cards/TeacherCard';

// Données factices pour 12 cours
export const mockCourseData: CourseTypes[] = Array.from({ length: 12 }, (_, i) => ({
    course_id: i + 1,
    course_tags: ['Développement Web'],
    course_title: `Cours ${i + 1}: Introduction à React`,
    course_desc:
        'Apprenez les bases de React, la bibliothèque JavaScript pour construire des interfaces utilisateur.',
}));

// Données factices pour 12 topics
export const mockTopicData: TopicTypes[] = Array.from({ length: 12 }, (_, i) => ({
    topic_id: i + 1,
    topic_tag: ['Productivité'],
    topic_title: `Topic ${i + 1}: Convertir un fichier PDF en WORD`,
    topic_content: 'Utilisez I Love PDF pour convertir des fichiers en toute simplicité.',
}));

// Données factices pour 12 enseignants
// export const mockTeacherData: TeacherTypes[] = Array.from({ length: 12 }, (_, i) => ({
//     id: `${i + 1}`,
//     name: `Enseignant ${i + 1}`,
//     subject: 'Développement Web',
//     bio: "Passionné par le développement web et l'enseignement.",
//     imageUrl: 'https://via.placeholder.com/150',
// }));
