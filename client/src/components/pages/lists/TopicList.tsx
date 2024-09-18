import TopicCard from '@/components/reusable-ui/cards/TopicCard';
import type TopicTypes from '@/components/types/TopicTypes';
import React, { useEffect, useState } from 'react';

const TopicList: React.FC = () => {
    const [topics, setTopics] = useState<TopicTypes[]>([]);
    const [displayedTopics, setDisplayedTopics] = useState<TopicTypes[]>([]);
    const [topicsToShow, setTopicsToShow] = useState<number>(6);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await fetch('https://technovice-app-196e28ed15ce.herokuapp.com/api/topics');
                const data = await response.json();
                setTopics(data);
                setDisplayedTopics(data.slice(0, topicsToShow));
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        };

        fetchTopics();
    }, [topicsToShow]);

    const handleShowMore = () => {
        setTopicsToShow(prev => prev + 6);
    };

    const handleTagClick = (tag: string) => {
        const updatedTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];

        setSelectedTags(updatedTags);

        if (updatedTags.length === 0) {
            setDisplayedTopics(topics.slice(0, topicsToShow));
        } else {
            const filteredTopics = topics.filter(topic =>
                updatedTags.every(selectedTag => topic.topic_tag.includes(selectedTag)),
            );
            setDisplayedTopics(filteredTopics.slice(0, topicsToShow));
        }
    };

    return (
        <div>
            <div className="tag-filter">
                {/* Remplace par tes tags réels */}
                {['JavaScript', 'React', 'Node.js'].map(tag => (
                    <button
                        key={tag}
                        className={selectedTags.includes(tag) ? 'selected' : ''}
                        onClick={() => handleTagClick(tag)}>
                        {tag}
                    </button>
                ))}
            </div>
            <div className="topic-list">
                {displayedTopics.map(topic => (
                    <TopicCard key={topic.topic_id} topic={topic} />
                ))}
            </div>
            {displayedTopics.length < topics.length && (
                <button onClick={handleShowMore}>Voir plus de topics</button>
            )}
        </div>
    );
};

export default TopicList;
