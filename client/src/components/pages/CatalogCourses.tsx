import React from 'react';
import { mockCourseData } from '../../fakeData';
import CourseList from './CourseList';

const CatalogCourses: React.FC = () => {
    return (
        <div className="py-8 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 w-full rounded-lg shadow-md p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-400 mb-6">Catalogue des cours</h1>
                <CourseList courses={mockCourseData} /> {/* Affichage complet des cours */}
            </div>
        </div>
    );
};

export default CatalogCourses;
