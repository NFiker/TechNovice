// src/components/pages/TeacherList.tsx
import React, { useEffect, useState } from 'react';
import type { TeacherType } from '../../reusable-ui/cards/TeacherCard';
import TeacherCard from '../../reusable-ui/cards/TeacherCard';

const TeacherList: React.FC = () => {
    const [teachers, setTeachers] = useState<TeacherType[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await fetch(
                    `https://technovice-app-196e28ed15ce.herokuapp.com/api/teachers`,
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch teachers');
                }
                const data: TeacherType[] = await response.json();

                setTeachers(data); // Stocker tous les enseignants récupérés
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false); // Mettre à jour l'état de chargement
            }
        };

        fetchTeachers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {teachers.map(user => (
                <TeacherCard key={user.user_id} teacher={user} />
            ))}
        </>
    );
};

export default TeacherList;
