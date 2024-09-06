import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CatalogTopics from './components/pages/CatalogTopics';
import Course from './components/pages/Course';
import CourseList from './components/pages/CourseList';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import Topic from './components/pages/Topic';
import { mockCourseData, mockTopicData } from './fakeData'; // Import des données factices

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/catalog-courses" element={<CourseList courses={mockCourseData} />} />
                <Route path="/course/:id" element={<Course />} />
                <Route path="/catalog-topics" element={<CatalogTopics topics={mockTopicData} />} />
                <Route path="/topic/:id" element={<Topic />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
