import { ChangeEvent, ReactElement, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface SearchbarProps<T> {
    data: T[];
    placeholder?: string;
    searchKeys: (keyof T)[];
    onSearch: (results: T[]) => void;
    onSelect?: (selectedItem: T) => void;
}

export default function Searchbar<T>({
    data,
    placeholder = 'Recherchez un cours...',
    searchKeys,
    onSearch,
    onSelect,
}: SearchbarProps<T>): ReactElement {
    const [query, setQuery] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setQuery(value);

        if (value.length >= 3) {
            const filteredResults = filterData(value);
            onSearch(filteredResults);
        } else {
            onSearch(data); // Réinitialiser avec toutes les données si < 3 caractères
        }
    };

    const filterData = (searchTerm: string): T[] => {
        return data.filter(item =>
            searchKeys.some(key => item[key]?.toString().toLowerCase().includes(searchTerm)),
        );
    };

    const handleSelect = (item: T) => {
        if (onSelect) {
            onSelect(item);
            setQuery(''); // Optionnel : Réinitialiser après sélection
        }
    };

    return (
        <div className="mb-4 relative max-w-[480px] w-full">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-full border h-12 shadow p-4 rounded-lg border-teal-400"
            />
            <button type="submit">
                <FaMagnifyingGlass className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current" />
            </button>

            {onSelect && query.length >= 3 && (
                <SuggestionList data={filterData(query)} searchKeys={searchKeys} onSelect={handleSelect} />
            )}
        </div>
    );
}

interface SuggestionListProps<T> {
    data: T[];
    searchKeys: (keyof T)[];
    onSelect: (selectedItem: T) => void;
}

function SuggestionList<T>({ data, searchKeys, onSelect }: SuggestionListProps<T>): ReactElement {
    return (
        <ul className="mt-2 border border-gray-300 rounded-md bg-white max-h-40 overflow-y-auto absolute w-full z-10">
            {data.map((item, index) => {
                const displayValue = item[searchKeys[0]];
                return (
                    <li
                        key={index}
                        className="p-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => onSelect(item)}>
                        {displayValue ? displayValue.toString() : 'N/A'}
                    </li>
                );
            })}
        </ul>
    );
}
