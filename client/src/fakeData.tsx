import { CourseType } from './components/reusable-ui/cards/CourseCard';
import { TeacherType } from './components/reusable-ui/TeacherCard';
import { TopicType } from './components/reusable-ui/cards/TopicCard';

// Données factices pour 12 cours
export const mockCourseData: CourseType[] = Array.from({ length: 12 }, (_, i) => ({
    id: `${i + 1}`,
    category: 'Développement Web',
    teacher: `Enseignant ${i + 1}`,
    title: `Cours ${i + 1}: Introduction à React`,
    description:
        'Apprenez les bases de React, la bibliothèque JavaScript pour construire des interfaces utilisateur.',
    duration: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 59) + 1}m`,
    imageUrl: 'https://via.placeholder.com/150',
}));

// Données factices pour 12 topics
export const mockTopicData: TopicType[] = Array.from({ length: 12 }, (_, i) => ({
    id: `${i + 1}`,
    category: 'Productivité',
    title: `Topic ${i + 1}: Convertir un fichier PDF en WORD`,
    description: 'Utilisez I Love PDF pour convertir des fichiers en toute simplicité.',
    duration: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 59) + 1}m`,
    imageUrl: 'https://via.placeholder.com/150',
}));

// Données factices pour 12 enseignants
export const mockTeacherData: TeacherType[] = Array.from({ length: 12 }, (_, i) => ({
    id: `${i + 1}`,
    name: `Enseignant ${i + 1}`,
    subject: 'Développement Web',
    bio: "Passionné par le développement web et l'enseignement.",
    imageUrl: 'https://via.placeholder.com/150',
}));
