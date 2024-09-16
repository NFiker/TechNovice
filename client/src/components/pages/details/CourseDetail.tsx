// src/components/pages/CourseDetail.tsx
import type { CourseType } from '@/components/reusable-ui/cards/CourseCard';
import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail: React.FC = () => {
    const { course_id } = useParams<{ course_id: string }>();
    const [oneCourse, setCourse] = useState<CourseType>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchOneCourse = async () => {
            try {
                const response = await fetch(
                    `https://technovice-app-196e28ed15ce.herokuapp.com/api/courses/${course_id}`,
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch course');
                }
                const data: CourseType = await response.json();
                setCourse(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false); // Mettre à jour l'état de chargement
            }
        };
        fetchOneCourse();
    }, [course_id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!oneCourse) {
        return <div>Cours introuvable</div>;
    }

    return (
        <>
            <Header />

            <main className="mt-32">
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-4">{oneCourse.course_title}</h1>
                    <img
                        className="mb-4 max-w-full"
                        src="https://placehold.co/600x400"
                        alt={oneCourse.course_title}
                    />
                    <p className="text-lg">{oneCourse.course_desc}</p>
                    <p className="text-sm text-gray-500">Enseignant: {oneCourse.author_user_id}</p>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default CourseDetail;
