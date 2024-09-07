import React from 'react';
import CourseCard, { CourseType } from '../reusable-ui/CourseCard';

interface CourseListProps {
    courses: CourseType[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    return (
        <div className="py-8 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 w-full rounded-lg shadow-md p-4">
            <h1>Catalogue des cours</h1>
            <h2>{courses.length} cours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseList;
