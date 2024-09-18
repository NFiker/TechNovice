import { useUser } from '@/context/UserContext';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

interface Course {
    course_id: number;
    course_title: string;
    course_desc: string;
    course_tags: string[];
    course_content: string;
    creation_date: string;
    update_date: string;
    author_user_id: number | null;
}

const Header: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://technovice-app-196e28ed15ce.herokuapp.com/api/courses');
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des cours:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleSearch = (results: Course[]) => {
        console.log('Results:', results);
    };

    const handleSelect = (selectedItem: Course) => {
        console.log('Selected item:', selectedItem);
    };

    const { user } = useUser();

    return (
        <header className="flex fixed border-b top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="max-md:hidden container w-1/4">
                <Link to="/">
                    <img src="/img/logo.png" alt="Logo de TechnO'vice" />
                </Link>
                <h1 className="text-center text-lg text-sky-500 font-semibold">Ne restez plus un novice!</h1>
            </div>

            <div className="md:hidden container w-1/4">
                <Link to="/">
                    <img src="/img/logo-small.png" alt="Logo de TechnO'vice" className="max-h-16" />
                </Link>
            </div>

            <div className="flex place-content-center container w-1/2 max-md:w-1/4">
                <div className="group relative cursor-pointer place-content-center">
                    <div className="flex items-center justify-between space-x-2 border-teal-400 border rounded-lg min-h-12 p-3">
                        <a className="menu-hover text-base text-black">Parcourir</a>
                        <span>
                            <IoIosArrowDown className="h-6 w-6" />
                        </span>
                    </div>

                    <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible rounded-lg">
                        <Link
                            to="/catalogue-des-sujets"
                            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-indigo-600 md:mx-2">
                            Forum
                        </Link>
                        <Link
                            to="/catalogue-des-cours"
                            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-indigo-600 md:mx-2">
                            Catalogue
                        </Link>
                        <Link
                            to="/connexion"
                            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-indigo-600 md:mx-2">
                            Connexion
                        </Link>
                        <Link
                            to="/inscription"
                            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-indigo-600 md:mx-2">
                            Inscription
                        </Link>
                    </div>
                </div>

                <div className="max-md:hidden max-w-[480px] w-full pl-4 place-content-center">
                    <Searchbar
                        data={courses} // Pass the fetched courses
                        searchKeys={['course_title', 'course_tags']} // Keys to search on
                        onSearch={handleSearch} // Search result callback
                        onSelect={handleSelect} // Selection callback
                    />
                </div>
            </div>

            <div className="max-md:w-1/2 container w-1/4 place-content-center">
                <nav className="font-semibold">
                    <ul className="flex justify-around items-center">
                        <li>
                            <Link
                                to="/inscription"
                                className="text-indigo-600 hover:text-indigo-800 max-md:hidden">
                                S'inscrire
                            </Link>
                        </li>
                        <li>
                            {' '}
                            {user ? (
                                <Link
                                    to="/déconnexion"
                                    className="text-indigo-600 hover:text-indigo-800 max-md:hidden">
                                    Se déconnecter
                                </Link>
                            ) : (
                                <Link
                                    to="/connexion"
                                    className="text-indigo-600 hover:text-indigo-800 max-md:hidden">
                                    Se connecter
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
