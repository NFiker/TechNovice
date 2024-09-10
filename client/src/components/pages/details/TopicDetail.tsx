// src/components/pages/TopicDetail.tsx
import { mockTopicData } from '@/fakeData'; // Import des données factices
import React from 'react';
import { useParams } from 'react-router-dom';

const TopicDetail: React.FC = () => {
    const { id } = useParams(); // Récupérer l'ID du topic via l'URL
    const topic = mockTopicData.find(topic => topic.id === id); // Trouver le topic correspondant

    if (!topic) {
        return <div>Topic non trouvé</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{topic.title}</h1>
            <p className="text-lg mb-2">Catégorie : {topic.category}</p>
            <p className="text-lg">{topic.description}</p>
            <p className="text-lg">Durée : {topic.duration}</p>
            <img className="mt-4" src={topic.imageUrl} alt={topic.title} />
        </div>
    );
};

export default TopicDetail;
