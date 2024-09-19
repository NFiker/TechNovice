import type TopicTypes from '@/components/types/TopicTypes';
import React, { useEffect, useState } from 'react';
import TopicCard from '../../reusable-ui/cards/TopicCard';

interface TopicListProps {
    slicer?: number;
    tagFilter?: string;
}

const TopicList: React.FC<TopicListProps> = ({ slicer, tagFilter }) => {
    const [topics, setTopics] = useState<TopicTypes[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await fetch(`https://technovice-app-196e28ed15ce.herokuapp.com/api/topics`);
                if (!response.ok) {
                    throw new Error('Failed to fetch topics');
                }
                let data: TopicTypes[] = await response.json();

                if (tagFilter) {
                    const tagsArray = tagFilter.split(',');
                    data = data.filter(topic => tagsArray.every(tag => topic.topic_tag.includes(tag)));
                }

                setTopics(slicer ? data.slice(0, slicer) : data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchTopics();
    }, [slicer, tagFilter]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-row-1 sm:flex-cols-2 lg:flex-row-3 gap-6">
            {topics.map(topic => (
                <TopicCard key={topic.topic_id} topic={topic} />
            ))}
        </div>
    );
};

export default TopicList;
