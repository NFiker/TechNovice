import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CatalogCourses from './components/pages/CatalogCourses';
import CatalogTopics from './components/pages/CatalogTopics';
import Course from './components/pages/Course';
import Homepage from './components/pages/Homepage';
import Login from './components/reusable-ui/Login';
import Topic from './components/pages/Topic';
import { mockCourseData, mockTopicData } from './fakeData'; // Import des données factices

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/catalog-courses" element={<CatalogCourses courses={mockCourseData} />} />
                <Route path="/course/:id" element={<Course />} />
                <Route path="/catalog-topics" element={<CatalogTopics topics={mockTopicData} />} />
                <Route path="/topic/:id" element={<Topic />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
