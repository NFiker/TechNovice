// src/components/pages/TopicList.tsx
import TopicCard, { TopicType } from '@/components/reusable-ui/TopicCard';
import { mockTopicData } from '@/fakeData';
import React from 'react';

interface TopicListProps {
    topics?: TopicType[];
}

const TopicList: React.FC<TopicListProps> = ({ topics = mockTopicData }) => {
    return (
        <div className="py-8 px-4 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 w-full rounded-lg shadow-md p-4">
            <h1>Catalogue des sujets</h1>
            <h2>{topics.length} sujets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {topics.map(topic => (
                    <TopicCard key={topic.id} topic={topic} />
                ))}
            </div>
        </div>
    );
};

export default TopicList;
