import React from 'react';
import Button from '../Button';

export interface CourseType {
    course_id: number;
    course_title: string;
    course_desc: string;
    course_tags: string[];
    course_content: string;
    author_user_id: number;
}

interface CourseCardProps {
    course: CourseType;
    buttonLabel: string;
    onButtonClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, buttonLabel, onButtonClick }) => {
    return (
        <div className="bg-white border-2 border-indigo-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
                <img
                    className="rounded-t-lg object-cover h-40 w-full"
                    src="https://placehold.co/600x400"
                    alt={course.course_title}
                />
                <div className="absolute top-2 left-2 flex">
                    {course.course_tags.map((tag, index) => (
                        <div key={index} className="bg-blue-600 text-white text-xs px-2 py-1 mr-2 rounded">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">Enseignant: {course.author_user_id}</p>
                <h5 className="text-lg font-bold text-gray-800 mb-2">{course.course_title}</h5>
                <p className="text-sm text-gray-600 mb-4">{course.course_desc}</p>
                <div className="flex justify-between items-center">
                    <Button label={buttonLabel} onClick={onButtonClick} version="primary" />
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
