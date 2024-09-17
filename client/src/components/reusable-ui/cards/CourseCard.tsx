// src/components/reusable-ui/CourseCard.tsx
import type CourseTypes from '@/components/types/CourseTypes';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
    course: CourseTypes;
    className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, className }) => {
    const navigate = useNavigate(); // Utilisation du hook de navigation

    const handleClick = () => {
        navigate(`cours/${course.course_id}`); // Redirection vers la page de détails du cours
    };

    return (
        <div
            className={`bg-white border-2 border-indigo-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className || ''}`}>
            <div className="relative z-10">
                <img
                    className="rounded-t-lg object-cover h-40 w-full"
                    src="https://placehold.co/600x400"
                    alt={course.course_title}
                />
                <div className="absolute top-2 left-2 flex">
                    {course.course_tags.map(tag => (
                        <div className="bg-blue-600 text-white text-xs px-2 py-1 mr-2 rounded">{tag}</div>
                    ))}
                </div>
            </div>
            <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">Enseignant: {course.author_user_id}</p>
                <h5 className="text-lg font-bold text-gray-800 mb-2">{course.course_title}</h5>
                <p className="text-sm text-gray-600 mb-4">{course.course_desc}</p>
                <div className="flex justify-between items-center">
                    <button
                        onClick={handleClick}
                        className="bg-blue-600 text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
