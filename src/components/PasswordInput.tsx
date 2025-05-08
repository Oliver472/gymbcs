import React from 'react'

interface PasswordInputProps {
    label: string;
    placeholder: string;
    id: string;
}

function PasswordInput({label, placeholder, id}:PasswordInputProps) {
    return (
        <div className="input flex flex-col justify-start ">
            <label className="mb-[5px]" htmlFor="email">{label}</label>
            <input
                type="password"
                id={id}
                placeholder={placeholder}
                className="border-2 border-accent2 px-[10px] py-[8px]"
            >

            </input>
        </div>
    )
}

export default PasswordInput
