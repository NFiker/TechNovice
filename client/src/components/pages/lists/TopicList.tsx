// src/components/pages/TopicList.tsx
import { mockTopicData } from '@/fakeData';
import React from 'react';
import type { TopicType } from '../../reusable-ui/cards/TopicCard';
import TopicCard from '../../reusable-ui/cards/TopicCard';

interface TopicListProps {
    topics?: TopicType[];
}

const TopicList: React.FC<TopicListProps> = ({ topics = mockTopicData }) => {
    return (
        <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 w-full rounded-lg shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 py-8">
                <h1 className="text-xl font-semibold text-white mb-4">Catalogue des sujets</h1>
                <h2 className="text-lg text-white mb-4">{topics.length} sujets</h2>
                <div className="flex flex-col gap-6">
                    {topics.map(topic => (
                        <TopicCard key={topic.id} topic={topic} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopicList;
