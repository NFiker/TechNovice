// src/components/CourseCard.tsx
import React from 'react';

// Typage d'un cours
export interface CourseType {
    id: string;
    category: string;
    teacher: string;
    title: string;
    description: string;
    duration: string;
    imageUrl: string;
}

// Typage des props d'un cours
interface CourseCardProps {
    course: CourseType;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
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
                    <button className="bg-blue-600 text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
