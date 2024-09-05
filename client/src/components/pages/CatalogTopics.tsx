import { useState } from 'react';
import { mockTopicData } from '../../fakeData'; // Import des données factices
import TopicCard from '../reusable-ui/TopicCard';

export default function CatalogTopics() {
    const [topics] = useState(mockTopicData);

    return (
        <div className="py-8 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 w-full rounded-lg shadow-md p-4">
            <div>CATALOGTOPICS</div>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-400 mb-6">Catalogue des sujets</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {topics.map(topic => (
                        <TopicCard key={topic.id} topic={topic} />
                    ))}
                </div>
            </div>
        </div>
    );
}
