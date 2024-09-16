// src/components/pages/CourseDetail.tsx
import React from 'react';

const CourseDetail: React.FC = ({ course }) => {

    if (!course) {
        return <div>Cours introuvable</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{course.course_title}</h1>
            <img className="mb-4 max-w-full" src="https://placehold.co/600x400" alt={course.course_title} />
            <p className="text-lg">{course.course_desc}</p>
            <p className="text-sm text-gray-500">Enseignant: {course.author_user_id}</p>
        </div>
    );
};

export default CourseDetail;
