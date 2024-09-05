import TopicCard, { TopicType } from '../reusable-ui/TopicCard';

interface CatalogTopicProps {
    Topics: TopicType[];
}

export default function CatalogTopic({ Topics }: CatalogTopicProps) {
    return (
        <div className="py-8 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 w-full rounded-lg shadow-md p-4">
            <div>CATALOGTOPICS</div>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-400 mb-6">Catalogue des cours</h1>
                {/* Configuration de la grille pour s'adapter à différents écrans */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Topics.map(Topic => (
                        <TopicCard key={Topic.id} Topic={Topic} />
                    ))}
                </div>
            </div>
        </div>
    );
}
