// src/App.tsx

import { useState } from 'react';
import CatalogCourse from './components/pages/CatalogCourse';
import TesterComponents from './components/pages/TesterComponents';
import { CourseType } from './components/reusable-ui/CourseCard';
import Searchbar from './components/reusable-ui/Searchbar';
import { mockCourseData } from './fakeData';

export default function App() {
    // État pour stocker les cours filtrés
    const [filteredCourses, setFilteredCourses] = useState<CourseType[]>(mockCourseData);

    // Fonction de gestion de la recherche
    const handleSearch = (searchResults: CourseType[]) => {
        setFilteredCourses(searchResults);
    };

    // Fonction pour sélectionner un cours (facultatif)
    const handleCourseSelect = (selectedCourse: CourseType) => {
        setFilteredCourses([selectedCourse]);
    };

    return (
        <div className="space-y-8 p-4">
            {/* Barre de recherche pour filtrer les cours */}
            <Searchbar<CourseType>
                data={mockCourseData}
                placeholder="Rechercher un cours..."
                searchKeys={['title', 'category', 'teacher']}
                onSearch={handleSearch}
                onSelect={handleCourseSelect}
            />

            {/* Composant CatalogCourse pour afficher les cours filtrés */}
            <CatalogCourse courses={filteredCourses} />

            {/* Composant TesterComponents pour tester les boutons */}
            <TesterComponents />
        </div>
    );
}
