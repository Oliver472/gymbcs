import React from 'react'

interface TextInputProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
}

function TextInput({label, placeholder, id, type}: TextInputProps) {
    return (
        <div className="input flex flex-col justify-start ">
            <label className="mb-[5px]" htmlFor="email">{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="border-2 border-accent2 px-[10px] py-[8px]"
            />
        </div>
    )
}

export default TextInput
