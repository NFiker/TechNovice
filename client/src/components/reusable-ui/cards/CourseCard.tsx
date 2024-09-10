// src/components/reusable-ui/CourseCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

export interface CourseType {
    id: string;
    category: string;
    teacher: string;
    title: string;
    description: string;
    duration: string;
    imageUrl: string;
}

interface CourseCardProps {
    course: CourseType;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const navigate = useNavigate(); // Utilisation du hook de navigation

    const handleClick = () => {
        navigate(`/cours/${course.id}`); // Redirection vers la page de détails du cours
    };

    return (
        <div className="bg-white border-2 border-indigo-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
                <img
                    className="rounded-t-lg object-cover h-40 w-full"
                    src={course.imageUrl}
                    alt={course.title}
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {course.category}
                </div>
            </div>
            <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">Enseignant: {course.teacher}</p>
                <h5 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h5>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{course.duration}</span>
                    <button
                        onClick={handleClick} // Appel de handleClick au clic
                        className="bg-indigo-800 text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors">
                        Suivre le cours
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
