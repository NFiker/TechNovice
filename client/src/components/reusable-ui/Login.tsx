// Homepage.tsx
import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-teal-400 bg-opacity-50 px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:max-w-xs sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white rounded-xl shadow-lg">
                    <div className="flex flex-col justify-center items-center h-full select-none">
                        <div className="flex flex-col items-center justify-center gap-2 mb-8">
                            <h1 className="m-0 font-semibold text-2xl">Connectez-vous!</h1>
                            <span className="m-0 text-xs text-center">
                                Connectez vous à votre compte pour accéder à tous nos services
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label className="font-semibold">Email</label>
                        <input
                            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                            placeholder="Votre email..."
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label className="font-semibold">Mot de passe</label>
                        <input
                            type="password"
                            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="mt-5">
                        <button className="py-1 px-8 bg-sky-500 hover:bg-sky-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                            Se connecter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
