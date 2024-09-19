import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import TopicTypes from '@/components/types/TopicTypes';
import React, { useEffect, useState } from 'react';

const TopicsCatalog: React.FC = () => {
    const [visibleTopics, setVisibleTopics] = useState<number>(12);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [allTags, setAllTags] = useState<string[]>([]);
    const [totalTopics, setTotalTopics] = useState<TopicTypes[]>([]);
    const [filteredTopics, setFilteredTopics] = useState<TopicTypes[]>([]);

    useEffect(() => {
        const fetchTopicsAndTags = async () => {
            try {
                const response = await fetch('https://technovice-app-196e28ed15ce.herokuapp.com/api/topics');
                const topics: TopicTypes[] = await response.json();
                setTotalTopics(topics);
                setFilteredTopics(topics);

                const tags = new Set<string>();
                topics.forEach(topic => {
                    topic.topic_tag.forEach(tag => tags.add(tag));
                });
                setAllTags(Array.from(tags));
            } catch (error) {
                console.error('Error fetching topics and tags:', error);
            }
        };

        fetchTopicsAndTags();
    }, []);

    useEffect(() => {
        if (selectedTags.length === 0) {
            setFilteredTopics(totalTopics);
        } else {
            const filtered = totalTopics.filter(topic =>
                selectedTags.every(tag => topic.topic_tag.includes(tag)),
            );
            setFilteredTopics(filtered);
        }
    }, [selectedTags, totalTopics]);

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <>
            <Header />
            <main className="mt-32 flex flex-col items-center">
                <div className="w-full px-6 py-8 flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-4 text-center">FORUMS</h1>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className={`px-3 py-1 m-1 rounded-lg border ${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                                {tag}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        {filteredTopics.length > 0 ? (
                            filteredTopics.slice(0, visibleTopics).map(topic => (
                                <div key={topic.topic_id} className="w-full">
                                    <div className="flex bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-6xl h-40">
                                        {/* Image Section */}
                                        <img
                                            className="rounded-l-lg object-cover h-full w-1/3"
                                            src="https://placehold.co/600x400"
                                            alt={topic.topic_title}
                                        />
                                        {/* Content Section */}
                                        <div className="p-4 w-2/3 flex sm:flex-row justify-between">
                                            <h5 className="text-lg font-bold mb-2">{topic.topic_title}</h5>
                                            <p className="text-sm text-gray-600">{topic.topic_content}</p>
                                            <div className="flex justify-between">
                                                <div className="flex flex-wrap gap-2">
                                                    {topic.topic_tag.map(tag => (
                                                        <span
                                                            key={tag}
                                                            className="bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <button
                                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                                                    onClick={() =>
                                                        (window.location.href = `/topics/${topic.topic_id}`)
                                                    }>
                                                    En savoir plus
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">Aucun topic ne correspond à la sélection.</p>
                        )}
                    </div>
                    {filteredTopics.length > visibleTopics && (
                        <button
                            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
                            onClick={() => setVisibleTopics(visibleTopics + 12)}>
                            Voir les forums suivants
                        </button>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default TopicsCatalog;
