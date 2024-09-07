// src/components/reusable-ui/TeacherCard.tsx
import React from 'react';

export interface TeacherType {
    id: string;
    name: string;
    subject: string;
    bio: string;
    imageUrl: string;
}

interface TeacherCardProps {
    teacher: TeacherType;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
                <img
                    className="rounded-t-lg object-cover h-40 w-full"
                    src={teacher.imageUrl}
                    alt={teacher.name}
                />
            </div>
            <div className="p-4">
                <h5 className="text-lg font-bold text-gray-800 mb-2">{teacher.name}</h5>
                <p className="text-sm text-gray-600 mb-4">{teacher.subject}</p>
                <p className="text-sm text-gray-600 mb-4">{teacher.bio}</p>
                <button className="bg-teal-600 text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors">
                    Voir le profil
                </button>
            </div>
        </div>
    );
};

export default TeacherCard;
