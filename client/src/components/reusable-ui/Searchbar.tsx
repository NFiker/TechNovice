import { ChangeEvent, ReactElement, useState } from 'react';

interface SearchbarProps<T> {
    data: T[];
    placeholder?: string;
    searchKeys: (keyof T)[];
    onSearch: (results: T[]) => void;
    onSelect?: (selectedItem: T) => void;
}

export default function Searchbar<T>({
    data,
    placeholder = 'Search...',
    searchKeys,
    onSearch,
    onSelect,
}: SearchbarProps<T>): ReactElement {
    const [query, setQuery] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setQuery(value);

        if (value.length >= 3) {
            const filteredResults = data.filter(item =>
                searchKeys.some(key => item[key]?.toString().toLowerCase().includes(value)),
            );
            onSearch(filteredResults);
        } else {
            onSearch([]); // Pas de résultats affichés si la longueur de la requête est < 3
        }
    };

    const handleSelect = (item: T) => {
        if (onSelect) {
            onSelect(item);
            setQuery(''); // Optionnel : Réinitialiser la barre de recherche après sélection
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            {onSelect && query.length >= 3 && (
                <ul className="mt-2 border border-gray-300 rounded-md bg-white">
                    {data
                        .filter(item =>
                            searchKeys.some(key => item[key]?.toString().toLowerCase().includes(query)),
                        )
                        .map((item, index) => {
                            const displayValue = item[searchKeys[0]];
                            return (
                                <li
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSelect(item)}>
                                    {displayValue ? displayValue.toString() : 'N/A'}
                                </li>
                            );
                        })}
                </ul>
            )}
        </div>
    );
}
