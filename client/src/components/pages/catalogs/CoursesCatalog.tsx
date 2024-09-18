import CourseList from '@/components/pages/lists/CourseList';
import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import CourseTypes from '@/components/types/CourseTypes'; // Import du type CourseTypes
import React, { useEffect, useState } from 'react';

const CoursesCatalog: React.FC = () => {
    const [visibleCourses, setVisibleCourses] = useState<number>(12); // Par défaut, on affiche 12 cours
    const [selectedTags, setSelectedTags] = useState<string[]>([]); // Liste des tags sélectionnés
    const [allTags, setAllTags] = useState<string[]>([]); // Liste de tous les tags disponibles
    const [totalCourses, setTotalCourses] = useState<CourseTypes[]>([]); // Liste de tous les cours
    const [filteredCourses, setFilteredCourses] = useState<CourseTypes[]>([]); // Liste des cours filtrés

    useEffect(() => {
        // Récupération des cours et des tags disponibles
        const fetchCoursesAndTags = async () => {
            try {
                const response = await fetch('https://technovice-app-196e28ed15ce.herokuapp.com/api/courses');
                const courses: CourseTypes[] = await response.json(); // Utilisation de CourseTypes pour typer les données
                setTotalCourses(courses); // Stocke la liste totale des cours
                setFilteredCourses(courses); // Initialise les cours filtrés à la liste complète

                // Extraire tous les tags uniques des cours
                const tags = new Set<string>();
                courses.forEach(course => {
                    course.course_tags.forEach((tag: string) => tags.add(tag));
                });
                setAllTags(Array.from(tags)); // Convertir Set en Array
            } catch (error) {
                console.error('Error fetching courses and tags:', error);
            }
        };

        fetchCoursesAndTags();
    }, []);

    useEffect(() => {
        // Filtrer les cours en fonction des tags sélectionnés
        if (selectedTags.length > 0) {
            const filtered = totalCourses.filter(course =>
                selectedTags.every(tag => course.course_tags.includes(tag)),
            );
            setFilteredCourses(filtered); // Mettre à jour les cours filtrés
        } else {
            setFilteredCourses(totalCourses); // Si aucun tag sélectionné, afficher tous les cours
        }
    }, [selectedTags, totalCourses]);

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag)); // Désélectionner un tag
        } else {
            setSelectedTags([...selectedTags, tag]); // Sélectionner un tag
        }
    };

    const handleLoadMore = () => {
        setVisibleCourses(prev => prev + 12); // Augmente de 12 lors du clic
    };

    // Vérifie s'il y a plus de cours filtrés à afficher que ceux visibles
    const isMoreCourses = visibleCourses < filteredCourses.length;

    return (
        <>
            <Header />
            <div className="courses-catalog p-5 pt-40">
                <h1 className="text-center text-white text-3xl font-bold mb-4 bg-indigo-600 p-3 rounded-md">
                    Catalogue des cours
                </h1>

                {/* Affichage des tags pour filtrer */}
                <div className="flex flex-wrap justify-center mb-4">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className={`px-3 py-1 m-1 rounded-lg border ${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Affichage des cours filtrés */}
                <CourseList
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
                    slicer={visibleCourses}
                    tagFilter={selectedTags.length > 0 ? selectedTags.join(',') : undefined} // Filtre par tags sélectionnés
                />

                {/* Affiche le bouton "Voir les cours suivants" seulement s'il y a plus de cours à afficher */}
                {isMoreCourses && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Voir les cours suivants
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default CoursesCatalog;
