import React from 'react';

import { FaMagnifyingGlass } from 'react-icons/fa6';

import type { CourseType } from '@/components/reusable-ui/CourseCard';
import CourseCard from '@/components/reusable-ui/CourseCard';
import Carousel from '../reusable-ui/Carousel';
import Footer from '../reusable-ui/Footer';
import Header from '../reusable-ui/Header';

const Homepage: React.FC = () => {
    // Données factices pour 4 profs
    const mockTeacherData: CourseType[] = Array.from({ length: 4 }, (_, i) => ({
        id: `${i + 1}`,
        category: 'Développement Web',
        teacher: `Enseignant ${i + 1}`,
        title: `Cours ${i + 1}: Introduction à React`,
        description:
            'Apprenez les bases de React, la bibliothèque JavaScript pour construire des interfaces utilisateur.',
        duration: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 59) + 1}m`,
        imageUrl: 'https://via.placeholder.com/150',
    }));

    // Données factices pour 6 cours
    const mockCourseData: CourseType[] = Array.from({ length: 6 }, (_, i) => ({
        id: `${i + 1}`,
        category: 'Développement Web',
        teacher: `Enseignant ${i + 1}`,
        title: `Cours ${i + 1}: Introduction à React`,
        description:
            'Apprenez les bases de React, la bibliothèque JavaScript pour construire des interfaces utilisateur.',
        duration: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 59) + 1}m`,
        imageUrl: 'https://via.placeholder.com/150',
    }));

    const cards = mockCourseData.map(course => <CourseCard key={course.id} course={course} />);

    return (
        <>
            <Header />
            <main>
                <div className="container md:grid md:grid-cols-6 md:grid-rows-6 md:gap-2">
                    <div className="container md:col-span-3 md:row-span-2">
                        <div className="md:container">
                            <div className="md:hidden container">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="Logo de TechnO'vice" />
                                </a>
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

                    <div className="md:container md:hidden flex place-content-center">
                        <form action="/search" className="md:hidden max-w-[480px] w-full">
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

                    <div className="container md:col-span-3 md:row-span-6 md:col-start-4 flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos cours du moment</h2>
                        <p className="mb-8">Découvrez nos cours les plus populaires</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {mockCourseData.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>

                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full self-center">
                            Découvrez le catalogue
                        </button>
                    </div>

                    <div className="container md:col-span-3 md:row-span-4 md:row-start-3 bg-indigo-600 text-white rounded-2xl flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos enseignants</h2>
                        <p className="mb-8">Discutez avec eux</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {mockTeacherData.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>

                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full self-center">
                            Découvrez le forum
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="container md:col-span-3 md:row-span-6 md:col-start-4 flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos catégories les plus populaires</h2>
                        <p className="mb-8">Découvrez notre séléction de cours par catégorie</p>

                        <div className="container mx-auto py-10">
                            <Carousel cards={cards} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Homepage;
