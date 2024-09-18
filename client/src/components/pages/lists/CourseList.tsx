import type CourseTypes from '@/components/types/CourseTypes';
import React, { useEffect, useState } from 'react';
import CourseCard from '../../reusable-ui/cards/CourseCard';

export interface CourseListProps {
    className?: string;
    carouselClassName?: string;
    style?: React.CSSProperties;
    slicer?: number;
    tagFilter?: string;
    variant?: 'public' | 'dashboard';
}

const CourseList: React.FC<CourseListProps> = ({
    className,
    carouselClassName,
    style,
    slicer,
    tagFilter,
    variant = 'public',
}) => {
    const [courses, setCourses] = useState<CourseTypes[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`https://technovice-app-196e28ed15ce.herokuapp.com/api/courses`);
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                let data: CourseTypes[] = await response.json();

                if (tagFilter) {
                    const tagsArray = tagFilter.split(','); // Sépare les tags sélectionnés
                    data = data.filter(course => tagsArray.every(tag => course.course_tags.includes(tag)));
                }
                if (slicer) {
                    data = data.slice(0, slicer); // Limiter les cours selon le slicer
                }
                setCourses(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, [slicer, tagFilter]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={className} style={style}>
            {courses.map(course => (
                <CourseCard
                    key={course.course_id}
                    course={course}
                    className={carouselClassName}
                    variant={variant}
                />
            ))}
        </div>
    );
};

export default CourseList;
