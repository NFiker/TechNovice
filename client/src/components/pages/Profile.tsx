import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import React from 'react';

const Profile: React.FC = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center w-full">
                {/* Section principale avec avatar et nom */}
                <div className="bg-indigo-600 w-full flex justify-center items-center p-8">
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
                        <h2 className="text-white text-3xl font-semibold">Jean-Baptiste Kapoué</h2>
                    </div>
                </div>

                {/* Section pour changer les données personnelles */}
                <div className="container my-12">
                    <h3 className="text-2xl font-semibold mb-4">Changez vos données personnelles :</h3>
                    <div className="flex flex-col items-center">
                        {/* Section pour changer le mot de passe */}
                        <div className="mb-6 text-center">
                            <p className="mb-4">Mot de passe oublié ?</p>
                            <button className="bg-black text-white font-semibold py-2 px-4 rounded">
                                Changer son mot de passe
                            </button>
                        </div>

                        {/* Formulaire de changement des informations */}
                        <div className="border border-gray-300 p-6 rounded-lg shadow-md">
                            <form className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-gray-700 font-semibold">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="border border-gray-300 p-2 rounded"
                                        placeholder="Value"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="surname" className="text-gray-700 font-semibold">
                                        Surname
                                    </label>
                                    <input
                                        type="text"
                                        id="surname"
                                        className="border border-gray-300 p-2 rounded"
                                        placeholder="Value"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-700 font-semibold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="border border-gray-300 p-2 rounded"
                                        placeholder="Value"
                                    />
                                </div>
                                <button className="bg-black text-white font-semibold py-2 px-4 rounded mt-4">
                                    Sauvegarder
                                </button>
                            </form>
                        </div>

                        {/* Bouton supprimer son compte */}
                        <button className="text-red-500 font-semibold mt-6">Supprimer son compte</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Profile;
