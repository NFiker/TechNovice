import { useState } from 'react';
import { mockCourseData } from '../../fakeData';
import CourseCard, { CourseType } from '../reusable-ui/CourseCard';

export default function CatalogCourses() {
    // Gérer l'état localement dans CatalogCourses
    const [filteredCourses, setFilteredCourses] = useState<CourseType[]>(mockCourseData);

    const handleSearch = (query: string) => {
        if (query.length >= 3) {
            const filtered = mockCourseData.filter(
                course =>
                    course.title.toLowerCase().includes(query.toLowerCase()) ||
                    course.category.toLowerCase().includes(query.toLowerCase()) ||
                    course.teacher.toLowerCase().includes(query.toLowerCase()),
            );
            setFilteredCourses(filtered);
        } else {
            setFilteredCourses(mockCourseData);
        }
    };

    return (
        <div className="py-8 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 w-full rounded-lg shadow-md p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-400 mb-6">Catalogue des cours</h1>
                {/* Searchbar pour filtrer les cours */}
                <input
                    type="text"
                    placeholder="Rechercher un cours..."
                    className="mb-6 p-2 border rounded"
                    onChange={e => handleSearch(e.target.value)}
                />
                {/* Configuration de la grille pour s'adapter à différents écrans */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
