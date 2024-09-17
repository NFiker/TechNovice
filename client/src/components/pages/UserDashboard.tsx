import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../reusable-ui/Footer';
import Header from '../reusable-ui/Header';
import CourseList from './lists/CourseList';
import type UserTypes from '../types/UserTypes';

interface UserDashboardProps {
    user: UserTypes;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ user }) => {
    console.log('UserDashboard component is rendering');
    const { user_id } = useParams<{ user_id: string }>();
    console.log('user_id', user_id);
    const [user, setUser] = useState<UserTypes | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!user_id) return;
            try {
                const response = await fetch(
                    `https://technovice-app-196e28ed15ce.herokuapp.com/api/users/${user_id}`,
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData: UserTypes = await response.json();
                setUser(userData);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An error occurred');
            }
        };

        fetchUserData();
    }, [user_id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <main className="mt-32">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-6">Tableau de bord de {user.nickname}</h1>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-1/2 border-teal-200 rounded-3xl p-8 border-2">
                            <h2 className="text-2xl font-semibold mb-4">Mes cours suivis</h2>
                            <div className="space-y-6">
                                {' '}
                                {/* Ajout de cette div avec espace vertical */}
                                <CourseList />
                            </div>
                        </div>
                        <div className="lg:w-1/2 border-teal-200 rounded-3xl p-8 border-2">
                            <h2 className="text-2xl font-semibold mb-4">Mes topics créés</h2>
                            <div className="space-y-6">
                                {' '}
                                {/* Ajout de cette div avec espace vertical */}
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default UserDashboard;
