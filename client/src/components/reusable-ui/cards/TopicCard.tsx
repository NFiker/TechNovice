import type TopicTypes from '@/components/types/TopicTypes';
import React from 'react';

interface TopicCardProps {
    topic: TopicTypes;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
    return (
        <div className="topic-card">
            <h3>{topic.topic_title}</h3>
            <p>{topic.topic_content}</p>
            <div>
                {topic.topic_tag.map((tag, index) => (
                    <span key={index} className="topic-tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TopicCard;
