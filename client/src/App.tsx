// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import Login from './components/reusable-ui/Login';

import CourseDetail from './components/pages/details/CourseDetail';
// import TeacherDetail from './components/pages/details/TeacherDetail';
import TopicDetail from './components/pages/details/TopicDetail';

import ProtectedRoute from './auth/ProtectedRoute';
import Profile from './components/pages/Profile';
import About from './components/pages/annexes/About';
import Conditions from './components/pages/annexes/Conditions';
import Legal from './components/pages/annexes/Legal';
import Error404 from './components/pages/errors/Error404';
import TeacherList from './components/pages/lists/TeacherList';
import TopicList from './components/pages/lists/TopicList';
import SignInComponent from './components/reusable-ui/Login';
import Signup from './components/reusable-ui/Signup';
import { mockTopicData } from './fakeData';

import { useEffect } from 'react';
import api from './api';
import { useUser } from './context/UserContext';

import UserDashboard from './components/pages/UserDashboard';

function App() {
    const { setUser } = useUser();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            api.get('/api/users/:user_id')
                .then(response => {
                    setUser({
                        user_id: response.data.user_id,
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [setUser]);
    return (
        <Router>
            <Routes>
                {/* Page d'accueil */}
                <Route path="/" element={<Homepage />} />
                {/* Catalogues */}
                {/* <Route path="/catalogue-des-cours" element={<CourseList courses={mockCourseData} />} /> */}
                <Route
                    path="/catalogue-des-sujets"
                    element={<TopicList topics={mockTopicData} variant="forum" />}
                />
                <Route path="/catalogue-des-enseignants" element={<TeacherList />} />
                {/* Connexion */}
                <Route path="/connexion" element={<Login />} />
                {/* Pages de détail */}
                <Route path="/inscription" element={<Signup />} />
                <Route path="/sujet/:id" element={<TopicDetail />} /> {/* Route pour TopicDetail */}
                <Route path="/cours/:course_id" element={<CourseDetail />} /> {/* Route pour CourseDetail */}
                {/* <Route path="/enseignant/:id" element={<TeacherDetail />} /> */}
                {/* Route pour TeacherDetail */}
                <Route
                    path="/tableau/:user_id"
                    element={
                        <>
                            {console.log('Rendering UserDashboard')}
                            <UserDashboard />
                        </>
                    }
                />
                {/* Connexion */}
                <Route path="/connexion" element={<Login />} />
                {/* Inscription */}
                <Route path="/inscription" element={<SignInComponent />} />
                {/* Profil */}
                <Route
                    path="/profil"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                {/* A-propos */}
                <Route path="/a-propos" element={<About />} />
                {/* Conditions générales */}
                <Route path="/conditions" element={<Conditions />} />
                {/* Informations légales */}
                <Route path="/informations" element={<Legal />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default App;
