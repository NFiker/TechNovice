import { Link } from 'react-router-dom';

const Error404: React.FC = () => {
    return (
        <div className="p-5">
            <h1 className="text-4xl mb-5">Error 404</h1>
            <p>Page non trouvée</p>
            <Link to="/" className="text-sky-800 hover:text-sky-500 underline">
                Retourner à l'accueil
            </Link>
        </div>
    );
};

export default Error404;
