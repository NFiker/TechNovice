import React from 'react';

import CourseList from '@/components/pages/lists/CourseList';
import TeacherList from '@/components/pages/lists/TeacherList';
import { mockCourseData, mockTeacherData, mockTopicData } from '@/fakeData';
import Footer from '../reusable-ui/Footer';
import Header from '../reusable-ui/Header';
import Searchbar from '../reusable-ui/Searchbar';
import TopicList from './lists/TopicList';

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
            <main className="relative">
                <div
                    className="herosection h-full grid md:grid-cols-2 md:grid-rows-2 gap-4"
                    style={{ position: 'relative' }}>
                    {/* Section promotionnelle */}
                    <div className="promo-section bg-[url('./public/img/Homepage_graphic.png')] bg-cover p-8 flex flex-col justify-center">
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
                            className="object-contain max-h-48 md:max-h-64 ml-auto"
                            style={{ maxWidth: '100%', height: 'auto' }}
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
                    <div className="teacher-section flex flex-col justify-between p-8">
                        <h2 className="text-3xl font-semibold mb-4">Nos enseignants</h2>
                        <p className="mb-8">Discutez avec eux</p>
                        <TeacherList teachers={mockTeacherData.slice(0, 4)} />
                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full self-center">
                            Découvrez le forum
                        </button>
                    </div>
                </div>

                {/* Searchbar ajoutée ici */}
                <div className="searchbar flex flex-row justify-end text-center pr-10">
                    <h1 className="pr-10 text-3xl">Sujets</h1>
                    <Searchbar
                        data={mockTopicData}
                        searchType="topic"
                        searchKeys={['title', 'category', 'description']}
                        onSearch={handleSearch}
                        onSelect={handleSelect}
                    />
                </div>

                {/* Section Topics (après la herosection) */}
                <div className="topic-section flex flex-col justify-between p-8">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <h2 className="text-3xl font-semibold text-white mb-4">Découvrez nos topics</h2>
                        <TopicList topics={mockTopicData.slice(0, 4)} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Homepage;
