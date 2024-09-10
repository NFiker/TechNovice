import CourseList from '@/components/pages/lists/CourseList';
import TeacherList from '@/components/pages/lists/TeacherList';
import TopicList from '@/components/pages/lists/TopicList';
import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import { mockCourseData, mockTeacherData, mockTopicData } from '@/fakeData';
import React from 'react';

const HomepageOld: React.FC = () => {
    return (
        <>
            {/* Header */}
            <Header />

            <main className="container mx-auto p-6 space-y-8">
                {/* Section promotionnelle avec texte et image */}
                <section className="flex flex-col items-center text-center">
                    <p className="font-bold text-2xl md:text-4xl mb-4 leading-snug">
                        Libérez votre potentiel et apprenez plus vite que jamais grâce aux cours
                        <span className="text-sky-500"> TechnO'vice</span>
                    </p>
                    <p className="w-3/4 m-4 drop-shadow-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at neque voluptatum
                    </p>
                    <p className="w-3/4 m-4 drop-shadow-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at neque voluptatum
                        dolore non quod, quas, quidem, quos quae quibusdam. Quisquam, quod.
                    </p>
                    <img
                        src="/img/homepage_graphic.png"
                        alt="Graphique avec des formes géométriques"
                        className="object-contain max-h-48 md:max-h-64"
                    />
                    {/* Section des enseignants */}
                    <section className="bg-teal-600 text-white rounded-2xl p-6 flex flex-col items-center space-y-4">
                        <h2 className="text-3xl font-semibold">Nos enseignants</h2>
                        <TeacherList teachers={mockTeacherData.slice(0, 4)} />
                        <button className="bg-teal-800 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-full transition-colors">
                            Découvrez le forum
                        </button>
                    </section>
                </section>

                {/* Section des cours */}
                <section className="bg-indigo-600 text-white rounded-2xl p-6 flex flex-col items-center space-y-4">
                    <h2 className="text-3xl font-semibold">Nos cours du moment</h2>
                    <CourseList courses={mockCourseData.slice(0, 4)} />
                    <button className="bg-indigo-800 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-full transition-colors">
                        Découvrez le catalogue
                    </button>
                </section>

                {/* Section des topics */}
                <section className="bg-sky-600 text-white rounded-2xl p-6 flex flex-col items-center space-y-4">
                    <h2 className="text-3xl font-semibold">Topics populaires</h2>
                    <TopicList topics={mockTopicData.slice(0, 4)} />
                    <button className="bg-sky-800 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-full transition-colors">
                        Voir tous les topics
                    </button>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default HomepageOld;
