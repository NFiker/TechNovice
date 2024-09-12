// Homepage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-teal-400 bg-opacity-50 px-4 sm:px-6 lg:px-8">
            <form action="post" className="relative py-3 sm:max-w-xs sm:mx-auto">
                <div className="flex flex-col justify-center items-center h-full select-none p-6 bg-indigo-600 rounded-t-xl">
                    <img className="max-w-20" src="img/logo-small.png" alt="" />
                </div>
                <div className="min-h-96 px-8 py-4 text-left bg-white rounded-b-xl shadow-lg">
                    <div className="flex flex-col justify-center items-center h-full select-none">
                        <div className="flex flex-col items-center justify-center gap-2 mb-4">
                            <h1 className="m-0 font-semibold text-2xl">Inscrivez-vous!</h1>
                            <span className="m-0 text-xs text-center">
                                Rejoignez-nous pour accéder à tous nos services, c'est gratuit et ça ne vous
                                prendra que deux minutes!
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="font-semibold">Email</label>
                        <input
                            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                            placeholder="Votre email..."
                            type="text"
                            name="email"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="font-semibold">Prénom</label>
                        <input
                            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                            placeholder="Votre prénom..."
                            type="text"
                            name="firstname"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="font-semibold">Nom</label>
                        <input
                            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                            placeholder="Votre nom..."
                            type="text"
                            name="lastname"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="font-semibold">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="font-semibold">Confirmez votre mot de passe</label>
                        <input
                            type="password"
                            name="password-confirm"
                            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="py-1 px-8 bg-sky-500 hover:bg-sky-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                            S'inscrire
                        </button>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-4">
                        <Link
                            className="font-semibold text-sm text-center text-indigo-600 hover:underline hover:underline-offset-2"
                            to="/connexion">
                            Déjà un compte ? Connectez-vous ici !
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
