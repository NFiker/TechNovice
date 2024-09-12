import React, { useState, useEffect } from 'react';
import CourseList from '../pages/lists/CourseList';
import type { CourseType } from './cards/CourseCard';

interface CarouselProps {
    cards: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [courses, setCourses] = useState<CourseType[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`https://technovice-app-196e28ed15ce.herokuapp.com/api/courses`);
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data: CourseType[] = await response.json();
                setCourses(data); // Stocker tous les cours récupérés
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false); // Mettre à jour l'état de chargement
            }
        };
        fetchCourses();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const nextSlide = () => {
        if (currentIndex + 1 < courses.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Retour à la première carte
        }
    };

    const prevSlide = () => {
        if (currentIndex - 1 >= 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(courses.length - 1); // Retour à la dernière carte
        }
    };

    return (
        <div className="relative w-full">
            {/* Arrow Left */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-900">
                &lt;
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    <CourseList className="w-full md:w-1/3 flex-shrink-0 p-4"/>

                    {/* {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/3 flex-shrink-0 p-4" // w-full for mobile, md:w-1/3 for desktop
                        >
                            {card}
                        </div>
                    ))} */}
                </div>
            </div>

            {/* Arrow Right */}
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-900">
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
