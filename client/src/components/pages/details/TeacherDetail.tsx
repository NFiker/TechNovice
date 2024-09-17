// import { mockTeacherData } from '@/fakeData'; // Importation des données factices
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const TeacherDetail: React.FC = () => {
//     const { id } = useParams<{ id: string }>(); // Récupération de l'ID de l'enseignant à partir de l'URL
//     const teacher = mockTeacherData.find(teacher => teacher.id === id); // Recherche de l'enseignant par ID

//     if (!teacher) {
//         return <div>Enseignant introuvable</div>;
//     }

//     return (
//         <div className="p-8">
//             <h1 className="text-3xl font-bold mb-4">{teacher.name}</h1>
//             <p className="text-lg">{teacher.bio}</p>
//             <p className="text-sm text-gray-500">Sujet: {teacher.subject}</p>
//             <p className="text-sm text-gray-500">Enseignant: {teacher.teacher}</p>
//             <img className="mb-4 max-w-full" src={teacher.imageUrl} alt={teacher.title} />
//         </div>
//     );
// };

// export default TeacherDetail;
