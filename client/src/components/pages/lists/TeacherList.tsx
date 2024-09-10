// src/components/pages/TeacherList.tsx
import { mockTeacherData } from '@/fakeData';
import React from 'react';
import type { TeacherType } from '../../reusable-ui/cards/TeacherCard';
import TeacherCard from '../../reusable-ui/cards/TeacherCard';

interface TeacherListProps {
    teachers?: TeacherType[];
}

const TeacherList: React.FC<TeacherListProps> = ({ teachers = mockTeacherData }) => {
    return (
        <div className="py-8 px-4 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 w-full rounded-lg shadow-md p-4">
            <h1 className="text-xl font-semibold text-white mb-4">Catalogue des enseignants</h1>
            <h2 className="text-lg text-white mb-4">{teachers.length} enseignants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachers.map(teacher => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </div>
    );
};

export default TeacherList;
