import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { Course } from './components/CourseCard/types';

export default function App() {
    // Données factices pour 12 cours
    const mockCourseData: Course[] = Array.from({ length: 12 }, (_, i) => ({
        id: `${i + 1}`,
        category: 'Développement Web',
        teacher: `Enseignant ${i + 1}`,
        title: `Cours ${i + 1}: Introduction à React`,
        description:
            'Apprenez les bases de React, la bibliothèque JavaScript pour construire des interfaces utilisateur.',
        duration: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 59) + 1}m`,
        imageUrl: 'https://via.placeholder.com/150',
    }));

    return (
        <main className="App py-8 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 h-48 w-full rounded-lg shadow-md p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-grey-400 mb-6">Catalogue des cours</h1>
                {/* Configuration de la grille pour s'adapter à différents écrans */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {mockCourseData.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </main>
    );
}
