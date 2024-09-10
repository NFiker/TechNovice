import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CatalogCourses from './components/pages/CatalogCourses';
import CatalogTopics from './components/pages/CatalogTopics';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import Topic from './components/pages/Topic';
import CourseCardTestAPI from './components/reusable-ui/CourseCardTestAPI';
import { mockCourseData, mockTopicData } from './fakeData'; // Import des données factices

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/catalog-courses" element={<CatalogCourses courses={mockCourseData} />} />
                <Route path="/courses/:course_id" element={<CourseCardTestAPI />} />
                <Route path="/catalog-topics" element={<CatalogTopics topics={mockTopicData} />} />
                <Route path="/topic/:id" element={<Topic />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
