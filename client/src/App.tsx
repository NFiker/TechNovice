import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CourseList from './components/pages/CourseList';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import TeacherList from './components/pages/TeacherList';
import TopicList from './components/pages/TopicList';
import { mockCourseData, mockTeacherData, mockTopicData } from './fakeData';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/catalogue-des-cours" element={<CourseList courses={mockCourseData} />} />
                <Route path="/catalogue-des-sujets" element={<TopicList topics={mockTopicData} />} />
                <Route
                    path="/catalogue-des-enseignants"
                    element={<TeacherList teachers={mockTeacherData} />}
                />
                <Route path="/se-connecter" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
