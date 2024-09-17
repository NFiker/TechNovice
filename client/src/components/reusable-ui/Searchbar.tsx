import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Pour la redirection
import type CourseTypes from '../types/CourseTypes';

interface SearchbarProps {
    searchKeys: string[]; // Clés de recherche comme course_title, course_tags
    mobile: boolean;
}

const Searchbar: React.FC<SearchbarProps> = ({ searchKeys, mobile }) => {
    const [courses, setCourses] = useState<CourseTypes[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://technovice-app-196e28ed15ce.herokuapp.com/api/courses');
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des cours:', error);
            }
        };

        fetchCourses();
    }, []);

    const [query, setQuery] = useState<string>('');
    const navigate = useNavigate(); // Hook pour la redirection

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value.toLowerCase();
        setQuery(searchQuery);

        // Filtrer les résultats uniquement si la requête a au moins 2 caractères
        if (searchQuery.length >= 2) {
            courses.filter(course =>
                searchKeys.some(key => {
                    const value = course[key as keyof CourseTypes];
                    if (Array.isArray(value)) {
                        return value.some(item => item.toString().toLowerCase().includes(searchQuery));
                    }
                    return value?.toString().toLowerCase().includes(searchQuery);
                }),
            );
        }
    };

    const handleSelect = (course: CourseTypes) => {
        navigate(`/cours/${course.course_id}`); // Redirection vers la page du cours
    };

    return (
        <div className={`relative ${mobile ? 'md:hidden' : 'max-md:hidden'}`}>
            <input
                type="text"
                className="w-full border border-teal-400 rounded-lg p-2"
                placeholder="Rechercher un cours..."
                value={query}
                onChange={handleSearch}
            />
            {query.length >= 2 && (
                <div className="absolute left-0 w-full mt-2 bg-white shadow-lg z-50">
                    {courses
                        .filter(course => course.course_title.toLowerCase().includes(query))
                        .map(course => (
                            <div
                                key={course.course_id}
                                className="p-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 relative z-50"
                                onClick={() => handleSelect(course)} // Appel de la fonction de redirection
                            >
                                <span>{course.course_title}</span>
                                {course.course_tags && (
                                    <div className="flex space-x-1">
                                        {course.course_tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Searchbar;
