import React from 'react';
import CourseCard, { CourseType } from '../reusable-ui/CourseCard';

interface CourseListProps {
    courses: CourseType[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CourseList;
