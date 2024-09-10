import React from 'react';
import type { CourseType } from '../../reusable-ui/cards/CourseCard';
import CourseCard from '../../reusable-ui/cards/CourseCard';

interface CourseListProps {
    courses: CourseType[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    return (
        <>
            {courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </>
    );
};

export default CourseList;
