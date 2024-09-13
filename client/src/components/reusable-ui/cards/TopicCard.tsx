// src/components/reusable-ui/TopicCard.tsx
import React from 'react';
import Button from '../Button';

// Typage d'un sujet
export interface TopicType {
    topic_id: number;
    topic_title: string;
    topic_tag: string[];
    topic_content: string;
    topic_date: string;
    author_user_id: number;
}

// Typage des props d'un sujet
interface TopicCardProps {
    topic: TopicType;
    buttonLabel: string;
    onButtonClick: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, buttonLabel, onButtonClick }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-row">
            <div className="p-4 flex flex-row justify-between gap-5">
                <h5 className="text-lg font-bold text-gray-800 mb-2">{topic.topic_title}</h5>
                <p className="text-sm bg-blue-600 h-fit text-white px-2 py-1 rounded">{topic.topic_tag[0]}</p>
                <p className="text-sm text-gray-600 mb-2 justify-items-center">{topic.topic_content}</p>
                <p className="text-sm text-gray-600 mb-4">
                    {new Date(topic.topic_date).toLocaleDateString()}
                </p>
                <Button label={buttonLabel} onClick={onButtonClick} version="primary" />
            </div>
        </div>
    );
};

export default TopicCard;
