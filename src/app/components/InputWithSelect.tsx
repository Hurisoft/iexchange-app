import { useState } from 'react';

interface Option {
    label: string;
    value: string;
}

interface CombinedInputSelectProps {
    options: Option[];
    icon: React.ReactNode;
    placeholder?: string;
    inputValue: string;
    onInputChange: (value: string) => void;
    onSelectChange: (value: string) => void;
}

const CombinedInputSelect: React.FC<CombinedInputSelectProps> = ({
    options,
    icon,
    placeholder = '',
    inputValue,
    onInputChange,
    onSelectChange,
}) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        onSelectChange(value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(event.target.value);
    };

    return (
        <div className="flex items-center bg-transparent border text-white border-[#C3D5F173] rounded-md px-3 pr-0">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="flex-1 p-2 border-none outline-none rounded-l-md bg-transparent"
            />
            {/* <div className='flex flex-row bg-transparent'> */}
                <div className="p-2">
                    {icon}
                </div>
                <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="bg-white border-none outline-none text-black p-2 rounded-r-md"
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            {/* </div> */}
        </div>
    );
};

export default CombinedInputSelect;
