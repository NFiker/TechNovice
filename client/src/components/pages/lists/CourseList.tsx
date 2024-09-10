import React from 'react';
import type { CourseType } from '../../reusable-ui/cards/CourseCard';
import CourseCard from '../../reusable-ui/cards/CourseCard';

interface CourseListProps {
    courses: CourseType[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    return (
        <div className="py-8 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 w-full rounded-lg shadow-md p-4">
            <h1 className="text-xl font-semibold text-white mb-4">Catalogue des cours</h1>
            <h2 className="text-lg text-white mb-4">{courses.length} cours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseList;
