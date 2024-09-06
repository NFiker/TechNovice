// src/components/pages/TeacherList.tsx
import TeacherCard, { TeacherType } from '@/components/reusable-ui/TeacherCard';
import { mockTeacherData } from '@/fakeData';
import React from 'react';

interface TeacherListProps {
    teachers?: TeacherType[];
}

const TeacherList: React.FC<TeacherListProps> = ({ teachers = mockTeacherData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teachers.map(teacher => (
                <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
        </div>
    );
};

export default TeacherList;
