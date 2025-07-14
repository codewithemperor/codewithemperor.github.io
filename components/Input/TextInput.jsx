import React from 'react'

const TextInput = ({ isDarkMode, value, handleInputChange, textarea, label }) => {
    const InputComponent = textarea ? 'textarea' : 'input';
    return (
        <div className='relative'>
            <InputComponent 
                type="text"
                className={`w-full px-4 pt-7 pb-2 rounded-xl border transition-all duration-300 outline-none resize-none ${isDarkMode ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800/70" : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white"}`}
                value={value}
                onChange={({ target }) => handleInputChange(target.value)} // Fix: Changed 'onchange' to 'onChange'
            />

            <label className={`text-sm absolute font-semibold left-4 top-2 pointer-events-none origin-left ${isDarkMode ? "text-blue-400" : "text-gray-900"}`}>
                {label}
            </label>
        </div>
    )
}

export default TextInput