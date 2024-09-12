// Homepage.tsx
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { Link } from 'react-router-dom';

function Login() {
    const [error, setError] = useState('');
    const signIn = useSignIn();

    const formik = useFormik({
        initialValues: {
            mail: '',
            password: '',
        },
        onSubmit: async values => {
            console.log('Values: ', values);

            try {
                const response = await axios.post(
                    'https://technovice-app-196e28ed15ce.herokuapp.com/login',
                    values,
                );

                signIn({
                    auth: {
                        token: response.data.token,
                        type: 'Bearer',
                    },
                    refresh: response.data.token,

                    userState: { name: 'React User' },
                });
            } catch (error) {
                if (error && error instanceof AxiosError) {
                    setError(error.response?.data.message);
                }
                console.log('Error:', error);
            }
        },
    });

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-teal-400 bg-opacity-50 px-4 sm:px-6 lg:px-8">
            <form
                action="post"
                className="relative py-3 sm:max-w-xs sm:mx-auto"
                onSubmit={formik.handleSubmit}>
                <div className="flex flex-col justify-center items-center h-full select-none p-6 bg-indigo-600 rounded-t-xl">
                    <img className="max-w-20" src="img/logo-small.png" alt="" />
                </div>
                <div className="min-h-96 px-8 py-6 text-left bg-white rounded-b-xl shadow-lg">
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
                            id="email"
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.mail}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label className="font-semibold">Mot de passe</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                            placeholder="••••••••"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="py-1 px-8 bg-sky-500 hover:bg-sky-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                            Se connecter
                        </button>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-4">
                        <Link
                            className="font-semibold text-sm text-center text-indigo-600 hover:underline hover:underline-offset-2"
                            to="/inscription">
                            Pas de compte ? inscrivez-vous ici !
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
