import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

const Header: React.FC = () => {
    return (
        <header className="flex border-b">
            <div className="max-md:hidden container w-1/4">
                <a href="./index.html">
                    <img src="./public/images/logo.png" alt="Logo de TechnO'vice" />
                </a>
                <h1 className="text-center text-lg text-sky-500 font-semibold">Ne restez plus un novice!</h1>
            </div>

            <div className="md:hidden container w-1/4">
                <a href="./index.html">
                    <img
                        src="./public/images/logo-small.png"
                        alt="Logo de TechnO'vice"
                        className="max-h-16"
                    />
                </a>
            </div>

            <div className="container w-1/2 flex max-md:w-1/4">
                <div className="group relative cursor-pointer place-content-center">
                    <div className="flex items-center justify-between space-x-2 border-teal-400 border rounded-lg min-h-12 p-3">
                        <a className="menu-hover text-base text-black"> Parcourir </a>
                        <span>
                            <IoIosArrowDown className="h-6 w-6" />
                        </span>
                    </div>

                    <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible rounded-lg">
                        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-indigo-600 md:mx-2">
                            Forum
                        </a>
                        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-indigo-600 md:mx-2">
                            Catalogue
                        </a>
                    </div>
                </div>
                <form
                    action="/search"
                    className="max-md:hidden max-w-[480px] w-full pl-4 place-content-center">
                    <div className="relative">
                        <input
                            type="text"
                            name=""
                            className="w-full border h-12 shadow p-4 rounded-lg border-teal-400"
                            placeholder="Recherchez un cours..."
                        />
                        <button type="submit">
                            <FaMagnifyingGlass className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current" />
                        </button>
                    </div>
                </form>
            </div>

            <div className="max-md:w-1/2 container w-1/4 place-content-center">
                <nav className="font-semibold">
                    <ul className="flex justify-around items-center">
                        <li>
                            <a className="text-indigo-600 hover:text-indigo-800" href="">
                                Se connecter
                            </a>
                        </li>
                        <li>
                            <a className="text-indigo-600 hover:text-indigo-800" href="">
                                S'inscrire
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
