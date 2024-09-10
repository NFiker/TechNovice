import { ChangeEvent, ReactElement, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface SearchbarProps<ItemType> {
    data: ItemType[];
    placeholder?: string;
    searchKeys: (keyof ItemType)[];
    onSearch: (results: ItemType[]) => void;
    onSelect?: (selectedItem: ItemType) => void;
    searchType: 'course' | 'topic' | 'teacher' | 'category'; // Nouvelle prop pour définir le type de recherche
}

export default function Searchbar<ItemType>({
    data,
    placeholder,
    searchKeys,
    onSearch,
    onSelect,
    searchType,
}: SearchbarProps<ItemType>): ReactElement {
    const [query, setQuery] = useState<string>('');

    const getPlaceholder = (): string => {
        switch (searchType) {
            case 'course':
                return 'Recherchez un cours...';
            case 'topic':
                return 'Recherchez un topic...';
            case 'teacher':
                return 'Recherchez un enseignant...';
            case 'category':
                return 'Recherchez une catégorie...';
            default:
                return 'Recherchez...';
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setQuery(value);

        if (value.length >= 2) {
            const filteredResults = filterData(value);
            onSearch(filteredResults);
        } else {
            onSearch(data); // Réinitialiser avec toutes les données si < 2 caractères
        }
    };

    const filterData = (searchTerm: string): ItemType[] => {
        return data.filter(item =>
            searchKeys.some(key => item[key]?.toString().toLowerCase().includes(searchTerm)),
        );
    };

    const handleSelect = (item: ItemType) => {
        if (onSelect) {
            onSelect(item);
            setQuery(''); // Optionnel : Réinitialiser après sélection
        }
    };

    return (
        <div className="mb-4 relative max-w-[480px] w-full place-content-center">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder || getPlaceholder()} // Utiliser le placeholder dynamique
                className="w-full border h-12 shadow p-4 rounded-lg border-teal-400"
            />
            <button type="submit">
                <FaMagnifyingGlass className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current" />
            </button>

            {onSelect && query.length >= 2 && (
                <SuggestionList data={filterData(query)} searchKeys={searchKeys} onSelect={handleSelect} />
            )}
        </div>
    );
}

interface SuggestionListProps<ItemType> {
    data: ItemType[];
    searchKeys: (keyof ItemType)[];
    onSelect: (selectedItem: ItemType) => void;
}

function SuggestionList<ItemType>({
    data,
    searchKeys,
    onSelect,
}: SuggestionListProps<ItemType>): ReactElement {
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
