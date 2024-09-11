import React, { useState } from 'react';

interface CarouselProps {
    cards: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex + 1 < cards.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Retour à la première carte
        }
    };

    const prevSlide = () => {
        if (currentIndex - 1 >= 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(cards.length - 1); // Retour à la dernière carte
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
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/3 flex-shrink-0 p-4" // w-full for mobile, md:w-1/3 for desktop
                        >
                            {card}
                        </div>
                    ))}
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
