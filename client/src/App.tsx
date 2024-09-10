import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import HomepageLudo from './components/pages/HomepageLudo';
import HomepageOld from './components/pages/HomepageOld';
import Login from './components/pages/Login';
import CourseList from './components/pages/lists/CourseList';
import TeacherList from './components/pages/lists/TeacherList';
import TopicList from './components/pages/lists/TopicList';
import { mockCourseData, mockTeacherData, mockTopicData } from './fakeData';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/old" element={<HomepageOld />} />
                <Route path="/l" element={<HomepageLudo />} />
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
