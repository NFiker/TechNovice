// src/components/pages/TeacherList.tsx
import TeacherCard, { TeacherType } from '@/components/reusable-ui/TeacherCard';
import { mockTeacherData } from '@/fakeData';
import React from 'react';

interface TeacherListProps {
    teachers?: TeacherType[];
}

const TeacherList: React.FC<TeacherListProps> = ({ teachers = mockTeacherData }) => {
    return (
        <div className="py-8 px-4 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 w-full rounded-lg shadow-md p-4">
            <h1>Catalogue des enseignants</h1>
            <h2>{teachers.length} enseignants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachers.map(teacher => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </div>
    );
};

export default TeacherList;
