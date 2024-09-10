// src/components/reusable-ui/TopicCard.tsx
import React from 'react';

// Typage d'un sujet
export interface TopicType {
    id: string;
    title: string;
    category: string;
    description: string;
    duration: string;
    imageUrl: string;
}

// Typage des props d'un sujet
interface TopicCardProps {
    topic: TopicType;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-row">
            <div className="relative">
                <img
                    className="rounded-t-lg object-cover h-40 w-full"
                    src={topic.imageUrl}
                    alt={topic.title}
                />
            </div>
            <div className="p-4 flex flex-row justify-between gap-5">
                <h5 className="text-lg font-bold text-gray-800 mb-2">{topic.title}</h5>
                <p className="text-sm bg-blue-600 h-fit text-white px-2 py-1 rounded">{topic.category}</p>
                <p className="text-sm text-gray-600 mb-2 justify-items-center">{topic.description}</p>
                <p className="text-sm text-gray-600 mb-4">{topic.duration}</p>
                <button className="bg-sky-800 h-fit text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors">
                    En savoir plus
                </button>
            </div>
        </div>
    );
};

export default TopicCard;
