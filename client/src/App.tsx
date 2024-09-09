import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CatalogCourses from './components/pages/CatalogCourses';
import CatalogTopics from './components/pages/CatalogTopics';
import Course from './components/pages/Course';
import Homepage from './components/pages/Homepage';
import Topic from './components/pages/Topic';
import Login from './components/reusable-ui/Login';
import Signup from './components/reusable-ui/Signup';
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
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
