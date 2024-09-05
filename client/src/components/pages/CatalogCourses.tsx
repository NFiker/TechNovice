import React from 'react';
import CourseCard, { CourseType } from '../reusable-ui/CourseCard';

interface CatalogCoursesProps {
    courses: CourseType[]; // On accepte désormais une prop courses
}

const CatalogCourses: React.FC<CatalogCoursesProps> = ({ courses }) => {
    return (
        <div className="py-8 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 w-full rounded-lg shadow-md p-4">
            <div>CATALOGCOURSES</div>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-400 mb-6">Catalogue des cours</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogCourses;
