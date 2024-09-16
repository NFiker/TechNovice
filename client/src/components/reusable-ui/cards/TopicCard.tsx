import React from 'react';

export interface TopicType {
    topic_id: number;
    topic_title: string;
    topic_tag: string[];
    topic_content: string;
    topic_date: string;
    author_user_id: number;
    author_name: string;
    comments_count: number;
}

interface TopicCardProps {
    topic: TopicType;
    variant: 'dashboard' | 'forum';
    onViewTopic: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, variant, onViewTopic }) => {
    const isDashboard = variant === 'dashboard';

    return (
        <div
            onClick={onViewTopic}
            className={`rounded-lg p-4 ${
                isDashboard
                    ? 'bg-gray-200 border-2 rounded-2xl border-indigo-500 flex items-center justify-between '
                    : 'bg-gray-100 cursor-pointer'
            }`}>
            <div className={isDashboard ? 'flex-grow' : ''}>
                <div className="flex justify-between items-center mb-2">
                    <h5 className="text-lg font-bold text-gray-800">{topic.topic_title}</h5>
                    {!isDashboard && topic.topic_tag[0] && (
                        <span className="text-xs bg-black text-white px-2 py-1 rounded">
                            {topic.topic_tag[0]}
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-600 mb-2">
                    {topic.topic_content.slice(0, 70)}
                    {topic.topic_content.length > 70 ? '...' : ''}
                </p>
                {!isDashboard && (
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{topic.comments_count} commentaires</span>
                        <span>{topic.author_name}</span>
                        <span>{new Date(topic.topic_date).toLocaleDateString()}</span>
                    </div>
                )}
            </div>
            {isDashboard && (
                <div className="flex flex-col items-end gap-2">
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-xl whitespace-nowrap">
                        Voir le topic
                    </button>
                </div>
            )}
        </div>
    );
};

export default TopicCard;
