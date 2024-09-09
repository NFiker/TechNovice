import CourseList from '@/components/pages/CourseList';
import TeacherList from '@/components/pages/TeacherList';
import TopicList from '@/components/pages/TopicList';
import Searchbar from '@/components/reusable-ui/Searchbar';
import { mockCourseData, mockTeacherData, mockTopicData } from '@/fakeData';
import React from 'react';
import Footer from '../reusable-ui/Footer';
import Header from '../reusable-ui/Header';

const Homepage: React.FC = () => {
    return (
        <>
            {/* Header */}
            <Header />

            <main>
                <div className="container md:grid md:grid-cols-6 md:grid-rows-6 md:gap-2">
                    {/* Section promotionnelle */}
                    <section className="md:col-span-3 md:row-span-2">
                        <div
                            className="bg-cover bg-no-repeat"
                            style={{ backgroundImage: "url('/img/Homepage_graphic.png')" }}>
                            <p className="font-bold text-4xl w-3/4 m-4 drop-shadow-md">
                                Libérez votre potentiel et apprenez plus vite que jamais grâce aux cours
                                <span className="text-sky-500"> TechnO'vice</span>
                            </p>
                        </div>
                    </section>

                    {/* Barre de recherche */}
                    <section className="md:hidden flex justify-center">
                        <Searchbar
                            data={mockCourseData}
                            placeholder="Recherchez un cours..."
                            searchKeys={['title', 'teacher']}
                            onSearch={results => console.log(results)}
                        />
                    </section>

                    {/* Section des cours */}
                    <section className="md:col-span-3 md:row-span-6 flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos cours du moment</h2>
                        <CourseList courses={mockCourseData.slice(0, 6)} />
                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full">
                            Découvrez le catalogue
                        </button>
                    </section>

                    {/* Section des enseignants */}
                    <section className="md:col-span-3 md:row-span-4 bg-indigo-600 text-white rounded-2xl flex flex-col">
                        <h2 className="text-3xl font-semibold">Nos enseignants</h2>
                        <TeacherList teachers={mockTeacherData.slice(0, 4)} />
                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full">
                            Découvrez le forum
                        </button>
                    </section>

                    {/* Section des topics */}
                    <section className="md:col-span-3 md:row-span-4 bg-green-600 text-white rounded-2xl flex flex-col mt-6">
                        <h2 className="text-3xl font-semibold">Topics populaires</h2>
                        <TopicList topics={mockTopicData.slice(0, 4)} />
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-6 rounded-full">
                            Voir tous les topics
                        </button>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Homepage;
