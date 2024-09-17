import CourseList from '@/components/pages/lists/CourseList';
import React, { useState } from 'react';

const CoursesCatalog: React.FC = () => {
    const [visibleCourses, setVisibleCourses] = useState<number>(9); // Par défaut, on affiche 9 cours

    const handleLoadMore = () => {
        setVisibleCourses(prev => prev + 9); // Augmente de 9 lors du clic
    };

    return (
        <div className="courses-catalog p-5">
            <h1 className="text-center text-2xl font-bold mb-4">Catalogue des cours</h1>
            <CourseList
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                slicer={visibleCourses}
            />
            <div className="mt-4 text-center">
                <button
                    onClick={handleLoadMore}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Voir les cours suivants
                </button>
            </div>
        </div>
    );
};

export default CoursesCatalog;
