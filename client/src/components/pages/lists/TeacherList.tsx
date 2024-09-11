// src/components/pages/TeacherList.tsx
import type { TeacherType } from '@/components/reusable-ui/cards/TeacherCard';
import TeacherCard from '@/components/reusable-ui/cards/TeacherCard';
import { mockTeacherData } from '@/fakeData';
import React from 'react';

interface TeacherListProps {
    teachers?: TeacherType[];
}

const TeacherList: React.FC<TeacherListProps> = ({ teachers = mockTeacherData }) => {
    return (
        <>
            {teachers.map(teacher => (
                <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
        </>
    );
};

export default TeacherList;
