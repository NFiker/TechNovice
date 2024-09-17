import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Pour la redirection

interface Course {
    course_id: number;
    course_title: string;
    course_desc: string;
    course_tags: string[];
    course_content: string;
    creation_date: string;
    update_date: string;
    author_user_id: number | null;
}

interface SearchbarProps {
    data: Course[]; // Tableau de cours
    searchKeys: string[]; // Clés de recherche comme course_title, course_tags
    onSearch: (results: Course[]) => void; // Callback pour les résultats de recherche
    onSelect: (selectedItem: Course) => void; // Callback pour la sélection d'un élément
}

const Searchbar: React.FC<SearchbarProps> = ({ data, searchKeys, onSearch, onSelect }) => {
    const [query, setQuery] = useState<string>('');
    const navigate = useNavigate(); // Hook pour la redirection

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value.toLowerCase();
        setQuery(searchQuery);

        // Filtrer les résultats uniquement si la requête a au moins 2 caractères
        if (searchQuery.length >= 2) {
            const filteredResults = data.filter(course =>
                searchKeys.some(key => {
                    const value = course[key as keyof Course];
                    if (Array.isArray(value)) {
                        return value.some(item => item.toString().toLowerCase().includes(searchQuery));
                    }
                    return value?.toString().toLowerCase().includes(searchQuery);
                }),
            );
            onSearch(filteredResults);
        } else {
            onSearch([]); // Si la requête est inférieure à 2 caractères, ne pas afficher de résultats
        }
    };

    const handleSelect = (course: Course) => {
        onSelect(course); // Callback pour informer de la sélection
        navigate(`/course/${course.course_id}`); // Redirection vers la page du cours
    };

    return (
        <div className="relative">
            <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Rechercher un cours..."
                value={query}
                onChange={handleSearch}
            />
            {query.length >= 2 && (
                <div className="absolute left-0 w-full mt-2 bg-white shadow-lg">
                    {data
                        .filter(course => course.course_title.toLowerCase().includes(query))
                        .map(course => (
                            <div
                                key={course.course_id}
                                className="p-2 flex justify-between items-center cursor-pointer hover:bg-gray-100"
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
