import { FaCheck, FaTimes } from 'react-icons/fa';
import Button from './components/reusable-ui/Button';
import type { CourseType } from './components/reusable-ui/CourseCard';
import CourseCard from './components/reusable-ui/CourseCard';
import Footer from './components/reusable-ui/Footer';
import Header from './components/reusable-ui/Header';

export default function App() {
    // Données factices pour 12 cours
    const mockCourseData: CourseType[] = Array.from({ length: 12 }, (_, i) => ({
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
        <>
            <Header />
            <main className="App py-8 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 w-full rounded-lg shadow-md p-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold text-grey-400 mb-6">Catalogue des cours</h1>
                    {/* Configuration de la grille pour s'adapter à différents écrans */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {mockCourseData.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                    <div className="p-8 space-y-4">
                        <Button
                            label="Primary Button"
                            version="primary"
                            onClick={() => alert('Primary clicked!')}
                        />
                        <Button
                            label="Success Button"
                            version="success"
                            onClick={() => alert('Success clicked!')}
                            Icon={<FaCheck />}
                        />
                        <Button
                            label="Danger Button"
                            version="danger"
                            onClick={() => alert('Danger clicked!')}
                            Icon={<FaTimes />}
                        />
                        <Button label="Disabled Button" version="primary" disabled={true} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
