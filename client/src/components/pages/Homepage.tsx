import React from 'react';

import CourseList from '@/components/pages/lists/CourseList';
import TeacherList from '@/components/pages/lists/TeacherList';
import Button from '@/components/reusable-ui/Button';
import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from '../reusable-ui/Carousel';
import Searchbar from '../reusable-ui/Searchbar';

const Homepage: React.FC = () => {
    const navigate = useNavigate();

    const handleForum = () => {
        navigate('/catalogue-des-sujets');
    };

    const handleCourse = () => {
        navigate('/catalogue-des-cours');
    };

    return (
        <>
            <Header />
            <main className="mt-32">
                <div className="container md:grid md:grid-cols-2 md:grid-rows-2 md:gap-2">
                    <div className="container">
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
                        <div className="h-full md:container bg-[url('../img/homepage_graphic_semi.png')] bg-contain bg-no-repeat max-md:bg-[position:170%_0%] bg-[position:100%_0%]">
                            <p className="font-bold text-4xl m-4 drop-shadow-md w-3/4">
                                Maîtrisez l’informatique en toute simplicité avec
                                <span className="text-sky-500"> les cours TechnO'vice</span>
                            </p>
                            <p className="m-4 drop-shadow-md w-3/4">
                                TechnO’vice vous aide à acquérir les compétences nécessaires pour naviguer en
                                toute confiance dans l’univers numérique.
                            </p>
                            <p className="m-4 drop-shadow-md w-3/4">
                                Que vous souhaitiez apprendre à utiliser Word, faire un achat en ligne, ou
                                éviter les pièges des sites malveillants, nous avons les formations qu’il vous
                                faut.
                            </p>
                        </div>
                    </div>

                    <Searchbar searchKeys={['course_title', 'course_tags']} mobile={true} />

                    <div className="container md:row-start-1 md:row-span-2 md:col-start-2 flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos cours du moment</h2>
                        <p className="mb-8">Découvrez nos cours les plus populaires</p>

                        <CourseList className="grid grid-cols-1 md:grid-cols-2 gap-6" slicer={4} />

                        <Button
                            label="Accéder au catalogue"
                            version="secondary"
                            onClick={handleCourse}
                            className="mt-6"
                        />
                    </div>

                    <div className="container md:col-start-1 md:row-start-2 bg-indigo-600 text-white rounded-2xl flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos enseignants</h2>
                        <p className="mb-8">Discutez avec eux</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TeacherList slicer={4} />
                        </div>

                        <Button
                            label="Accéder au forum"
                            version="tertiary"
                            onClick={handleForum}
                            className="mt-6"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="container flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos catégories les plus populaires</h2>
                        <p className="mb-8">Découvrez notre séléction de cours par catégorie</p>

                        <Carousel tagName="Word" />

                        <Carousel tagName="PC" />

                        <Carousel tagName="E-commerce" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Homepage;
