import CourseCard, { CourseType } from '@/components/reusable-ui/CourseCard';
import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

// Composant HeroSection pour l'intro
const HeroSection: React.FC = () => (
    <div className="container bg-[url('./public/img/Homepage_graphic.png')] bg-contain bg-no-repeat max-md:bg-[position:170%_0%] bg-[position:100%_0%]">
        <p className="font-bold text-4xl w-3/4 m-4 drop-shadow-md">
            Libérez votre potentiel et apprenez plus vite que jamais grâce
            <span className="text-sky-500"> aux cours TechnO'vice</span>
        </p>
        <p className="w-3/4 m-4 drop-shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at neque voluptatum
        </p>
        <p className="w-3/4 m-4 drop-shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at neque voluptatum dolore non
            quod, quas, quidem, quos quae quibusdam. Quisquam, quod.
        </p>
    </div>
);

// Composant SearchBar pour la recherche
const SearchBar: React.FC = () => (
    <div className="md:container md:hidden flex place-content-center">
        <form action="/search" className="md:hidden max-w-[480px] w-full">
            <div className="relative">
                <input
                    type="text"
                    className="w-full border h-12 shadow p-4 rounded-lg border-teal-400"
                    placeholder="Recherchez un cours..."
                />
                <button type="submit">
                    <FaMagnifyingGlass className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current" />
                </button>
            </div>
        </form>
    </div>
);

// Composant CourseSection pour les cours
const CourseSection: React.FC<{ courses: CourseType[] }> = ({ courses }) => (
    <div className="container md:col-span-3 md:row-span-6 md:col-start-4 flex flex-col">
        <h2 className="text-3xl font-semibold">Nos cours du moment</h2>
        <p className="mb-8">Découvrez nos cours les plus populaires</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full self-center">
            Découvrez le catalogue
        </button>
    </div>
);

// Composant TeacherSection pour les enseignants
const TeacherSection: React.FC<{ teachers: CourseType[] }> = ({ teachers }) => (
    <div className="container md:col-span-3 md:row-span-4 md:row-start-3 bg-indigo-600 text-white rounded-2xl flex flex-col">
        <h2 className="text-3xl font-semibold">Nos enseignants</h2>
        <p className="mb-8">Discutez avec eux</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teachers.map(teacher => (
                <CourseCard key={teacher.id} course={teacher} />
            ))}
        </div>
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-6 rounded-full self-center">
            Découvrez le forum
        </button>
    </div>
);

const Homepage: React.FC = () => {
    // Données factices pour les profs et les cours
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

    return (
        <main>
            <div className="container md:grid md:grid-cols-6 md:grid-rows-6 md:gap-2">
                <div className="container md:col-span-3 md:row-span-2">
                    <HeroSection />
                </div>
                <SearchBar />
                <CourseSection courses={mockCourseData} />
                <TeacherSection teachers={mockTeacherData} />
            </div>
        </main>
    );
};

export default Homepage;
