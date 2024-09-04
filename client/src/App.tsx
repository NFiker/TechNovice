import CatalogCourse from './components/pages/CatalogCourse';
import TesterComponents from './components/pages/TesterComponents';
import { mockCourseData } from './fakeData';

export default function App() {
    return (
        <div className="space-y-8">
            {/* Composant CatalogCourse pour afficher les cours */}
            <CatalogCourse courses={mockCourseData} />

            {/* Composant TesterComponents pour tester les boutons */}
            <TesterComponents />
        </div>
    );
}
