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
    buttonClassName?: string;
    dangerButtonLabel?: string;
    onDangerButtonClick?: () => void;
    dangerButtonClassName?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
    course,
    buttonLabel,
    onButtonClick,
    buttonClassName = '',
    dangerButtonLabel,
    onDangerButtonClick,
    dangerButtonClassName = '',
}) => {
    return (
        <div className="bg-white border-2 border-indigo-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
            <div className="relative mb-4">
                <img
                    className=" object-cover h-40 w-full mx-auto"
                    src="https://placehold.co/600x400"
                    alt={course.course_title}
                />
                <div className="absolute top-2 left-0 flex">
                    {course.course_tags.map((tag, index) => (
                        <div key={index} className="bg-gray-800 text-white text-xs px-2 py-1 mr-2 rounded">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-3">
                <p className="text-xs text-gray-500">Enseignant: {course.author_user_id}</p>
                <h5 className="text-lg font-bold text-gray-800">{course.course_title}</h5>
                <p className="text-sm text-gray-600">{course.course_desc}</p>
                <div className="flex justify-between items-center pt-2">
                    <Button
                        label={buttonLabel}
                        onClick={onButtonClick}
                        version="primary"
                        className={`w-full mr-2 ${buttonClassName}`}
                    />
                    {dangerButtonLabel && onDangerButtonClick && (
                        <Button
                            label={dangerButtonLabel}
                            onClick={onDangerButtonClick}
                            version="danger"
                            className={`w-full ml-2 ${dangerButtonClassName}`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
