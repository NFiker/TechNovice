// src/components/pages/TopicList.tsx
import TopicCard, { TopicType } from '@/components/reusable-ui/TopicCard';
import { mockTopicData } from '@/fakeData';
import React from 'react';

interface TopicListProps {
    topics?: TopicType[];
}

const TopicList: React.FC<TopicListProps> = ({ topics = mockTopicData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map(topic => (
                <TopicCard key={topic.id} topic={topic} />
            ))}
        </div>
    );
};

export default TopicList;
