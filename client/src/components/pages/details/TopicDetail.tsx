import Footer from '@/components/reusable-ui/Footer';
import Header from '@/components/reusable-ui/Header';
import type TopicTypes from '@/components/types/TopicTypes';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TopicDetail: React.FC = () => {
    const { topic_id } = useParams<{ topic_id: string }>();
    const [oneTopic, setTopic] = useState<TopicTypes>();
    const [error, setError] = useState<string | null>(null);
    const [loadingTopic, setLoadingTopic] = useState<boolean>(true);

    useEffect(() => {
        const fetchOneTopic = async () => {
            try {
                const response = await fetch(
                    `https://technovice-app-196e28ed15ce.herokuapp.com/api/topics/${topic_id}`,
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch topic');
                }
                const data: TopicTypes = await response.json();
                setTopic(data);
                setLoadingTopic(false);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoadingTopic(false);
            }
        };
        fetchOneTopic();
    }, [topic_id]);

    if (loadingTopic) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!oneTopic) {
        return <div>Topic introuvable</div>;
    }

    return (
        <>
            <Header />

            <main className="mt-32 flex justify-center">
                <div className="p-8 flex-col md:max-w-[50%]">
                    <h1 className="text-3xl font-bold mb-4">{oneTopic.topic_title}</h1>
                    <img
                        className="mb-4 max-w-full"
                        src="https://placehold.co/600x400"
                        alt={oneTopic.topic_title}
                    />
                    <p className="text-lg">{oneTopic.topic_content}</p>
                    <p className="mt-4">{oneTopic.topic_content}</p>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default TopicDetail;
