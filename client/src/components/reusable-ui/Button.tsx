import React from 'react';

interface ButtonProps {
    label: string;
    Icon?: React.ReactNode;
    className?: string;
    version?: 'primary' | 'success' | 'danger';
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
            'bg-yellow-500 text-white hover:bg-yellow-600 border border-yellow-500 hover:border-yellow-600',
        success: 'bg-green-500 text-white hover:bg-green-600 border border-green-500 hover:border-green-600',
        danger: 'bg-red-500 text-white hover:bg-red-600 border border-red-500 hover:border-red-600',
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
