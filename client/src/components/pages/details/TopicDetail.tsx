import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import TopicTypes from '@/components/types/TopicTypes';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TopicDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [topic, setTopic] = useState<TopicTypes | null>(null);

    useEffect(() => {
        const fetchTopicDetails = async () => {
            try {
                const response = await fetch(
                    `https://technovice-app-196e28ed15ce.herokuapp.com/api/topics/${id}`,
                );
                const fetchedTopic: TopicTypes = await response.json();
                setTopic(fetchedTopic);
            } catch (error) {
                console.error('Error fetching topic details:', error);
            }
        };

        fetchTopicDetails();
    }, [id]);

    if (!topic) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Header />
            <main className="mt-32 flex flex-col items-center">
                <div className="max-w-4xl w-full px-6 py-8">
                    <h1 className="text-3xl font-bold mb-4">{topic.topic_title}</h1>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {topic.topic_tag.map(tag => (
                            <span key={tag} className="bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md">
                        <p className="text-gray-700 mb-4">{topic.topic_content}</p>
                        <div className="flex justify-between text-gray-500 text-sm">
                            <span>Posted by {topic.author_name}</span>
                            <span>{new Date(topic.topic_date!).toLocaleDateString()}</span>
                        </div>
                    </div>

                    {/* Comments */}
                    <div className="mt-8">
                        <h2 className="text-xl font-bold">Comments ({topic.comments_count || 0})</h2>
                        {/* Add logic for displaying comments here */}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default TopicDetail;
