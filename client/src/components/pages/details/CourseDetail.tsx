// src/components/pages/CourseDetail.tsx
import { mockCourseData } from '@/fakeData'; // Importation des données factices
import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Récupération de l'ID du cours à partir de l'URL
    const course = mockCourseData.find(course => course.id === id); // Recherche du cours par ID

    if (!course) {
        return <div>Cours introuvable</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <img className="mb-4 max-w-full" src={course.imageUrl} alt={course.title} />
            <p className="text-lg">{course.description}</p>
            <p className="text-sm text-gray-500">Enseignant: {course.teacher}</p>
            <p className="text-sm text-gray-500">Durée: {course.duration}</p>
        </div>
    );
};

export default CourseDetail;
