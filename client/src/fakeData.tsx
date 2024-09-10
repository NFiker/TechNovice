import { CourseType } from './components/reusable-ui/CourseCard';

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
export const mockTopicData: CourseType[] = Array.from({ length: 12 }, (_, i) => ({
    id: `${i + 1}`,
    category: 'PDF',
    teacher: `Enseignant ${i + 1}`,
    title: `Topic ${i + 1}: Convertir un fichier PDF en WORD`,
    description: 'Utilisation du site I love PDF pour la conversion de fichiers',
    duration: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 59) + 1}m`,
    imageUrl: 'https://via.placeholder.com/150',
}));
