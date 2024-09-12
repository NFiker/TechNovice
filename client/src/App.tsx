// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import Login from './components/reusable-ui/Login';

import CourseDetail from './components/pages/details/CourseDetail';
import TeacherDetail from './components/pages/details/TeacherDetail';
import TopicDetail from './components/pages/details/TopicDetail';

import TeacherList from './components/pages/lists/TeacherList';
import TopicList from './components/pages/lists/TopicList';
import { mockTeacherData, mockTopicData } from './fakeData';

import UserDashboard from './components/pages/UserDashboard';

function App() {
    return (
        <Router>
            <Routes>
                {/* Homepages versions */}
                <Route path="/" element={<Homepage />} />
                {/* Catalogues */}
                {/* <Route path="/catalogue-des-cours" element={<CourseList courses={mockCourseData} />} /> */}
                <Route path="/catalogue-des-sujets" element={<TopicList topics={mockTopicData} />} />
                <Route
                    path="/catalogue-des-enseignants"
                    element={<TeacherList teachers={mockTeacherData} />}
                />
                {/* Connexion */}
                <Route path="/login" element={<Login />} />
                {/* Pages de détail */}
                <Route path="/sujet/:id" element={<TopicDetail />} /> {/* Route pour TopicDetail */}
                <Route path="/courses/:course_id" element={<CourseDetail />} />{' '}
                {/* Route pour CourseDetail */}
                <Route path="/enseignant/:id" element={<TeacherDetail />} /> {/* Route pour TeacherDetail */}
                {/* Route pour TeacherDetail */}
                <Route
                    path="/dashboard/:user_id"
                    element={
                        <>
                            {console.log('Rendering UserDashboard')}
                            <UserDashboard />
                        </>
                    }
                />
                <Route path="*" element={<div>404 - Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
