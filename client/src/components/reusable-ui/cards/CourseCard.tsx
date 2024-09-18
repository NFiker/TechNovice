import type CourseTypes from '@/components/types/CourseTypes';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

interface CourseCardProps {
    course: CourseTypes;
    variant?: 'public' | 'dashboard';
    className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, variant = 'public', className }) => {
    const navigate = useNavigate();

    const handleCourseClick = () => {
        navigate(`/cours/${course.course_id}`);
    };

    const handleUnfollowClick = () => {
        // Logique pour arrêter de suivre le cours
    };

    return (
        <div className={`rounded-lg border-2 border-indigo-600 bg-white shadow-md ${className || ''}`}>
            <div className="relative">
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
                <h5 className="text-lg font-bold mb-2">{course.course_title}</h5>
                <p className="text-sm text-gray-600 mb-4">{course.course_desc}</p>

                {variant === 'public' ? (
                    <div className="flex justify-center">
                        <Button label="En savoir plus" version="primary" onClick={handleCourseClick} />
                    </div>
                ) : (
                    <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 sm:justify-between">
                        <Button label="Continuer le cours" version="primary" onClick={handleCourseClick} />
                        <Button label="Arrêter de suivre" version="danger" onClick={handleUnfollowClick} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseCard;
