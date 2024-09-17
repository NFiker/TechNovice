// src/components/pages/TopicList.tsx
import type TopicTypes from '@/components/types/TopicTypes';
import TopicCard from '@/components/reusable-ui/cards/TopicCard';
import { mockTopicData } from '@/fakeData';
import React from 'react';

interface TopicListProps {
    topics?: TopicTypes[];
    variant: 'dashboard' | 'forum';
}

const TopicList: React.FC<TopicListProps> = ({ topics = mockTopicData, variant }) => {
    return (
        <>
            <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 w-full rounded-lg shadow-md">
                <div className="max-w-screen-xl mx-auto px-4 py-8">
                    <h1 className="text-xl font-semibold text-white mb-4">Catalogue des sujets</h1>
                    <h2 className="text-lg text-white mb-4">{topics.length} sujets</h2>
                    <div className="flex flex-col gap-6">
                        {topics.map(topic => (
                            <TopicCard key={topic.id} topic={topic} variant={variant} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopicList;
