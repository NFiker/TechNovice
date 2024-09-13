import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Récupérer l'ID depuis les paramètres de l'URL
    const [userData, setUserData] = useState<any>(null); // État pour stocker les données utilisateur
    const [loading, setLoading] = useState<boolean>(true); // État de chargement

    useEffect(() => {
        // Fonction pour récupérer les données utilisateur depuis l'API
        const fetchUserData = async () => {
            try {
                const response = await fetch(
                    `https://technovice-app-196e28ed15ce.herokuapp.com/api/users/${id}`,
                );
                const data = await response.json();
                setUserData(data); // Mise à jour des données utilisateur
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur :', error);
            } finally {
                setLoading(false); // Désactivation de l'état de chargement
            }
        };

        fetchUserData();
    }, [id]); // Exécution uniquement lorsque l'ID change

    if (loading) {
        return <p>Chargement...</p>; // Affichage pendant le chargement
    }

    if (!userData) {
        return <p>Aucun utilisateur trouvé.</p>; // Si aucun utilisateur n'est trouvé
    }

    return (
        <>
            <Header />
            <div className="w-screen min-h-screen flex items-center justify-center bg-teal-400 bg-opacity-50 px-4 sm:px-6 lg:px-8">
                <form action="post" className="relative py-3 sm:max-w-xs sm:mx-auto">
                    {/* Avatar et Nom */}
                    <div className="flex flex-col justify-center items-center h-full select-none p-6 bg-indigo-600 rounded-t-xl">
                        <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
                        <h2 className="text-white text-2xl font-semibold">
                            {userData.first_name} {userData.last_name}
                        </h2>
                        <h3 className="text-white text-lg">{userData.nickname}</h3>
                    </div>

                    {/* Formulaire de modification des informations personnelles */}
                    <div className="min-h-96 px-8 py-4 text-left bg-white rounded-b-xl shadow-lg">
                        <div className="flex flex-col justify-center items-center h-full select-none">
                            <div className="flex flex-col items-center justify-center gap-2 mb-4">
                                <h1 className="m-0 font-semibold text-2xl">Modifier votre profil</h1>
                                <span className="m-0 text-xs text-center">
                                    Mettez à jour vos informations ici.
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label className="font-semibold">Nom</label>
                            <input
                                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                placeholder="Votre nom..."
                                type="text"
                                name="lastname"
                                defaultValue={userData ? userData.last_name : ''}
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label className="font-semibold">Prénom</label>
                            <input
                                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                placeholder="Votre prénom..."
                                type="text"
                                name="firstname"
                                defaultValue={userData ? userData.first_name : ''}
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label className="font-semibold">Email</label>
                            <input
                                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                placeholder="Votre email..."
                                type="email"
                                name="email"
                                defaultValue={userData ? userData.mail : ''}
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label className="font-semibold">Mot de passe</label>
                            <input
                                type="password"
                                name="password"
                                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                placeholder="••••••••"
                                defaultValue=""
                            />
                        </div>
                        <div className="mt-5">
                            <button
                                type="submit"
                                className="py-1 px-8 bg-sky-500 hover:bg-sky-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                                Sauvegarder
                            </button>
                        </div>

                        {/* Bouton Supprimer son compte */}
                        <div className="w-full flex flex-col gap-2 mt-4">
                            {/* Section Mot de passe oublié */}
                            <p className="mb-4 hover:text-sky-500 self-center cursor-pointer">
                                Mot de passe oublié ?
                            </p>
                            <button className="text-red-500 font-semibold mt-4">Supprimer son compte</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
