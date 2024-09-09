import React from 'react';

import CourseList from '@/components/pages/CourseList';
import TeacherList from '@/components/pages/TeacherList';
import { mockCourseData, mockTeacherData } from '@/fakeData';
import Footer from '../reusable-ui/Footer';
import Header from '../reusable-ui/Header';

const HomepageLudo: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <div
                    className="herosection h-[calc(100vh-64px)] grid md:grid-cols-2 md:grid-rows-2 gap-4"
                    style={{ position: 'relative' }}>
                    {/* Section promotionnelle */}
                    <div className="promo-section bg-[url('./public/img/Homepage_graphic.png')] bg-cover p-8">
                        <h1 className="text-5xl font-bold text-sky-500 mb-4">Ne restez plus un novice!</h1>
                        <p className="text-lg mb-2">
                            Libérez votre potentiel et apprenez plus vite que jamais grâce
                            <span className="text-sky-500"> aux cours TechnO'vice</span>
                        </p>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at neque voluptatum
                            dolore non quod, quas, quidem, quos quae quibusdam. Quisquam, quod.
                        </p>
                        <img
                            src="/img/homepage_graphic.png"
                            alt="Graphique avec des formes géométriques"
                            className="object-contain max-h-48 md:max-h-64"
                        />
                    </div>

                    {/* Section des cours */}
                    <div className="course-section flex flex-col justify-between p-8">
                        <h2 className="text-3xl font-semibold mb-4">Nos cours du moment</h2>
                        <p className="mb-8">Découvrez nos cours les plus populaires</p>
                        <CourseList courses={mockCourseData.slice(0, 4)} />
                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full self-center">
                            Découvrez le catalogue
                        </button>
                    </div>

                    {/* Section des enseignants */}
                    <div className="teacher-section bg-indigo-600 text-white p-8 rounded-lg">
                        <h2 className="text-3xl font-semibold mb-4">Nos enseignants</h2>
                        <p className="mb-8">Discutez avec eux</p>
                        <TeacherList teachers={mockTeacherData.slice(0, 4)} />
                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full self-center">
                            Découvrez le forum
                        </button>
                    </div>
                </div>

                {/* Section Topics (après la herosection) */}
                <div className="topics-section p-8">
                    <h2 className="text-3xl font-semibold mb-4">Découvrez nos topics</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Affichage des topics ici */}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default HomepageLudo;
