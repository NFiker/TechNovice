import React from 'react';

import CourseList from '@/components/pages/lists/CourseList';
import TeacherList from '@/components/pages/lists/TeacherList';
import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import { mockCourseData } from '@/fakeData';
import { Link } from 'react-router-dom';
import Searchbar from '../reusable-ui/Searchbar';

const Homepage: React.FC = () => {
    const handleSearch = (results: any[]) => {
        // Logique pour gérer les résultats de recherche
        console.log('Results:', results);
    };

    const handleSelect = (selectedItem: any) => {
        // Logique pour gérer la sélection d'un élément
        console.log('Selected item:', selectedItem);
    };

    return (
        <>
            <Header />
            <main className="mt-32">
                <div className="container md:grid md:grid-cols-6 md:grid-rows-6 md:gap-2">
                    <div className="container md:col-span-3 md:row-span-2">
                        <div className="md:container">
                            <div className="md:hidden container">
                                <Link to="/">
                                    <img src="img/logo.png" alt="Logo de TechnO'vice" />
                                </Link>
                                <h1 className="text-center text-3xl text-sky-500 font-semibold">
                                    Ne restez plus un novice!
                                </h1>
                            </div>
                        </div>
                        <div className="md:container md:bg-[url('img/homepage_graphic.png')] max-md:bg-[url('img/homepage_graphic_semi.png')] bg-contain bg-no-repeat max-md:bg-[position:170%_0%] bg-[position:100%_0%]">
                            <p className="font-bold text-4xl md:w-3/4 m-4 drop-shadow-md">
                                Libérez votre potentiel et apprenez plus vite que jamais grâce
                                <span className="text-sky-500"> aux cours TechnO'vice</span>
                            </p>
                            <p className="w-3/4 m-4 drop-shadow-md">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at neque
                                voluptatum
                            </p>
                            <p className="w-3/4 m-4 drop-shadow-md">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at neque
                                voluptatum dolore non quod, quas, quidem, quos quae quibusdam. Quisquam, quod.
                            </p>
                        </div>
                    </div>

                    <div className="container md:hidden flex place-content-center">
                        <Searchbar
                            data={mockCourseData}
                            searchType="course"
                            searchKeys={['course_title', 'course_tags', 'course_desc']}
                            onSearch={handleSearch}
                            onSelect={handleSelect}
                        />
                    </div>

                    <div className="container md:col-span-3 md:row-span-6 md:col-start-4 flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos cours du moment</h2>
                        <p className="mb-8">Découvrez nos cours les plus populaires</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CourseList />
                        </div>

                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full self-center">
                            <Link to="catalogue-des-cours">Découvrez le catalogue</Link>
                        </button>
                    </div>

                    <div className="container md:col-span-3 md:row-span-4 md:row-start-3 bg-indigo-600 text-white rounded-2xl flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos enseignants</h2>
                        <p className="mb-8">Discutez avec eux</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TeacherList />
                        </div>

                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full self-center">
                            <Link to="catalogue-des-sujets">Découvrez le forum</Link>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="container md:col-span-3 md:row-span-6 md:col-start-4 flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos catégories les plus populaires</h2>
                        <p className="mb-8">Découvrez notre séléction de cours par catégorie</p>

                        <div className="container mx-auto py-10"></div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Homepage;
