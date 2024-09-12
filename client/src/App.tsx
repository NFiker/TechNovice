// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import Login from './components/reusable-ui/Login';

import CourseDetail from './components/pages/details/CourseDetail';
import TeacherDetail from './components/pages/details/TeacherDetail';
import TopicDetail from './components/pages/details/TopicDetail';

import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';
import About from './components/pages/annexes/About';
import Conditions from './components/pages/annexes/Conditions';
import Legal from './components/pages/annexes/Legal';
import Error404 from './components/pages/errors/Error404';
import TopicList from './components/pages/lists/TopicList';
import Signup from './components/reusable-ui/Signup';
import { mockTopicData } from './fakeData';

function App() {
    return (
        <Router>
            <Routes>
                {/* Page d'accueil */}
                <Route path="/" element={<Homepage />} />
                {/* Catalogues */}
                {/* <Route path="/catalogue-des-cours" element={<CourseList courses={mockCourseData} />} /> */}
                <Route path="/catalogue-des-sujets" element={<TopicList topics={mockTopicData} />} />
                {/* <Route
                    path="/catalogue-des-enseignants"
                    element={<TeacherList teachers={mockTeacherData} />}
                /> */}
                {/* Pages de détail */}
                <Route path="/sujet/:id" element={<TopicDetail />} /> {/* Route pour TopicDetail */}
                <Route path="/courses/:course_id" element={<CourseDetail />} />{' '}
                {/* Route pour CourseDetail */}
                <Route path="/enseignant/:id" element={<TeacherDetail />} /> {/* Route pour TeacherDetail */}
                {/* Route pour TeacherDetail */}
                {/* Connexion */}
                <Route path="/connexion" element={<Login />} />
                {/* Inscription */}
                <Route path="/inscription" element={<Signup />} />
                {/* Profil */}
                <Route path="/profil" element={<Profile />} />
                {/* Tableau de bord */}
                <Route path="/tableau" element={<Dashboard />} />
                {/* A-propos */}
                <Route path="/a-propos" element={<About />} />
                {/* Conditions générales */}
                <Route path="/conditions" element={<Conditions />} />
                {/* Informations légales */}
                <Route path="/informations" element={<Legal />} />
                {/* Erreurs */}
                <Route path="/erreur" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default App;
