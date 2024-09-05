import { useState } from 'react';
import CatalogCourse from './components/pages/CatalogCourse';
import TesterComponents from './components/pages/TesterComponents';
import { CourseType } from './components/reusable-ui/CourseCard';
import Searchbar from './components/reusable-ui/Searchbar';
import { mockCourseData } from './fakeData';

export default function App() {
    // État pour les cours filtrés
    const [filteredCourses, setFilteredCourses] = useState<CourseType[]>(mockCourseData);

    const handleCourseSelect = (selectedCourse: CourseType) => {
        setFilteredCourses([selectedCourse]);
    };

    const handleSearchResults = (results: CourseType[]) => {
        setFilteredCourses(results);
    };

    return (
        <div className="space-y-8">
            {/* Composant Searchbar pour la recherche */}
            <Searchbar<CourseType>
                data={mockCourseData}
                placeholder="Rechercher un cours..."
                searchKeys={['title', 'category', 'teacher']}
                onSearch={handleSearchResults}
                onSelect={handleCourseSelect}
            />

            {/* Composant CatalogCourse pour afficher les cours */}
            <CatalogCourse courses={filteredCourses} />

            {/* Composant TesterComponents pour tester les boutons */}
            <TesterComponents />
        </div>
    );
}
