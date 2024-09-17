// src/components/reusable-ui/TeacherCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface TeacherTypes {
    user_id: number;
    nickname: string;
    first_name: string;
    last_name: string;
    role_name: string;
}

interface TeacherCardProps {
    teacher: TeacherTypes;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
    const navigate = useNavigate(); // Utilisation du hook de navigation

    const handleClick = () => {
        navigate(`/enseignant/${teacher.user_id}`); // Redirection vers la page de détails du cours
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/*}<div className="relative">
                
                <img
                    className="rounded-t-lg object-cover h-40 w-full"
                    src={teacher.imageUrl}
                    alt={teacher.first_name}
                />
                
            </div>{*/}
            <div className="p-4">
                <h5 className="text-lg font-bold text-gray-800 mb-2">
                    {teacher.first_name} {teacher.last_name}
                </h5>
                <p className="text-sm text-gray-600 mb-4">{teacher.nickname}</p>
                {/*}<p className="text-sm text-gray-600 mb-4">{teacher.subject}</p>
                <p className="text-sm text-gray-600 mb-4">{teacher.bio}</p>{*/}

                <button
                    onClick={handleClick}
                    className="bg-indigo-800 text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors">
                    Voir le profil
                </button>
            </div>
        </div>
    );
};

export default TeacherCard;
