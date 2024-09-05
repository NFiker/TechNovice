import { mockCourseData } from '@/fakeData';
import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Button from '../reusable-ui/Button';
import { CourseType } from '../reusable-ui/CourseCard';
import Searchbar from '../reusable-ui/Searchbar';
import CatalogCourses from './CatalogCourses'; // Assurez-vous d'utiliser le bon chemin

export default function Homepage() {
    const [filteredCourses, setFilteredCourses] = useState<CourseType[]>(mockCourseData);

    const handleCourseSelect = (selectedCourse: CourseType) => {
        setFilteredCourses([selectedCourse]);
    };

    const handleSearchResults = (results: CourseType[]) => {
        setFilteredCourses(results);
    };

    return (
        <div className="p-8 space-y-4">
            <h1>Homepage</h1>

            <Searchbar<CourseType>
                data={mockCourseData}
                placeholder="Rechercher un cours..."
                searchKeys={['title', 'category', 'teacher']}
                onSearch={handleSearchResults}
                onSelect={handleCourseSelect}
            />

            {/* Affichage des cours filtrés */}
            <CatalogCourses courses={filteredCourses} />

            <Button label="Primary Button" version="primary" onClick={() => alert('Primary clicked!')} />
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
    );
}
