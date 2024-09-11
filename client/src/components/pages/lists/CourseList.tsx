import React, { useEffect, useState } from 'react';
import type { CourseType } from '../../reusable-ui/cards/CourseCard';
import CourseCard from '../../reusable-ui/cards/CourseCard';

const CourseList: React.FC = () => {
    const [courses, setCourses] = useState<CourseType[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`https://technovice-app-196e28ed15ce.herokuapp.com/api/courses`);
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data: CourseType[] = await response.json();
                setCourses(data); // Stocker tous les cours récupérés
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false); // Mettre à jour l'état de chargement
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {courses.map(course => (
                <CourseCard key={course.course_id} course={course} />
            ))}
        </>
    );
};

export default CourseList;
