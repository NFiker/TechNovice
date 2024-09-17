import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import CourseList from '../pages/lists/CourseList';
import type CourseTypes from '../types/CourseTypes';

interface CarouselProps {
    tagName: string;
}

const Carousel: React.FC<CarouselProps> = ({ tagName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [, setCourses] = useState<CourseTypes[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`https://technovice-app-196e28ed15ce.herokuapp.com/api/courses`);
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data: CourseTypes[] = await response.json();
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
        if (currentIndex < 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="container">
            <h2 className="text-3xl mb-4 pb-2 text-center border-b-2 border-sky-300 text-sky-500 font-semibold">
                {tagName}
            </h2>
            <div className="relative w-full flex items-center justify-center mb-2">
                {/* Left arrow */}
                <button className="absolute left-0 p-4" onClick={prevSlide}>
                    <FaArrowLeft className="h-8 w-8 text-indigo-600 hover:text-indigo-900" />
                </button>

                {/* Carousel container */}
                <div className="w-5/6 overflow-hidden">
                    <CourseList
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        className="flex transition-transform duration-500 md:gap-4"
                        carouselClassName="min-w-full md:min-w-[32%]"
                        slicer={6}
                        tagFilter={tagName}
                    />
                </div>

                {/* Right arrow */}
                <button className="absolute right-0 p-4" onClick={nextSlide}>
                    <FaArrowRight className="h-8 w-8 text-indigo-600 hover:text-indigo-900" />
                </button>
            </div>
            <Link
                className="w-full font-semibold text-sm text-center text-indigo-600 hover:underline hover:underline-offset-2"
                to={`/catalogue-des-cours/${tagName}`}>
                Voir dans le catalogue...
            </Link>
        </div>
    );
};

export default Carousel;
