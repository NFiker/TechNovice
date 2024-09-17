import React from 'react';

interface ButtonProps {
    label: string;
    Icon?: React.ReactNode;
    className?: string;
    version?: 'primary' | 'secondary' | 'danger' | 'tertiary';
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    Icon,
    className = '',
    version = 'primary',
    onClick,
    disabled = false,
}) => {
    const baseStyles =
        'inline-flex items-center justify-center px-4 py-2 font-semibold rounded-lg transition-all duration-200 ease-out';

    const versionStyles = {
        primary:
            'bg-indigo-600 text-white hover:bg-indigo-700 border border-indigo-500 hover:border-indigo-800',
        secondary: 'bg-teal-600 text-white hover:bg-teal-700 border border-teal-500 hover:border-teal-600',
        tertiary: 'bg-sky-500 text-white hover:bg-sky-600 border border-sky-600 hover:border-sky-700',
        danger: ' text-red-500 hover:bg-red-600 border border-red-500 hover:border-red-600',
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${versionStyles[version]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}>
            {Icon && <span className="mr-2">{Icon}</span>}
            <span>{label}</span>
        </button>
    );
};

export default Button;
