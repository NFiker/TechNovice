// src/components/pages/CourseDetail.tsx
import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import type CourseTypes from '@/components/types/CourseTypes';
import type UserTypes from '@/components/types/UserTypes';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail: React.FC = () => {
    const { course_id } = useParams<{ course_id: string }>();
    const [oneCourse, setCourse] = useState<CourseTypes>();
    const [oneUser, setUser] = useState<UserTypes>();
    const [error, setError] = useState<string | null>(null);
    const [loadingCourse, setLoadingCourse] = useState<boolean>(true);
    const [loadingUser, setLoadingUser] = useState<boolean>(false);

    useEffect(() => {
        const fetchOneCourse = async () => {
            try {
                const response = await fetch(
                    `https://technovice-app-196e28ed15ce.herokuapp.com/api/courses/${course_id}`,
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch course');
                }
                const data: CourseTypes = await response.json();
                setCourse(data);
                setLoadingCourse(false);

                if (data.author_user_id) {
                    setLoadingUser(true);
                    const userResponse = await fetch(
                        `https://technovice-app-196e28ed15ce.herokuapp.com/api/users/${data.author_user_id}`,
                    );
                    if (!userResponse.ok) {
                        throw new Error('Failed to fetch user');
                    }
                    const userData: UserTypes = await userResponse.json();
                    setUser(userData);
                }
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoadingCourse(false);
                setLoadingUser(false);
            }
        };
        fetchOneCourse();
    }, [course_id]);

    if (loadingCourse || loadingUser) {
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

            <main className="mt-32 flex justify-center">
                <div className="p-8 flex-col md:max-w-[50%]">
                    <h1 className="text-3xl font-bold mb-4">{oneCourse.course_title}</h1>
                    <img
                        className="mb-4 max-w-full"
                        src="https://picsum.photos/600/400"
                        alt={oneCourse.course_title}
                    />
                    <p className="text-lg">{oneCourse.course_desc}</p>
                    <p className="text-sm text-gray-500">
                        Enseignant: {oneUser?.first_name} {oneUser?.last_name} ({oneUser?.nickname})
                    </p>
                    <p className="mt-4">{oneCourse.course_content}</p>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default CourseDetail;
