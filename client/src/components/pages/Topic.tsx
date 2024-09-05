// src/components/Topic.tsx
import React from 'react';

// Typage d'un cours
export interface TopicType {
    id: string;
    category: string;
    teacher: string;
    title: string;
    description: string;
    duration: string;
    imageUrl: string;
}

// Typage des props d'un cours
interface TopicProps {
    Topic: TopicType;
}

const Topic: React.FC<TopicProps> = ({ Topic }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div>TOPIC</div>
            <div className="relative">
                <img
                    className="rounded-t-lg object-cover h-40 w-full"
                    src={Topic.imageUrl}
                    alt={Topic.title}
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {Topic.category}
                </div>
            </div>
            <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">Enseignant: {Topic.teacher}</p>
                <h5 className="text-lg font-bold text-gray-800 mb-2">{Topic.title}</h5>
                <p className="text-sm text-gray-600 mb-4">{Topic.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{Topic.duration}</span>
                    <button className="bg-blue-600 text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topic;
