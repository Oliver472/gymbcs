import React from 'react'

interface CustomButtonProps {
    title: string;
    action: () => void;
}

function CustomButton({title, action}: CustomButtonProps) {
    return (
        <button type="submit" onClick={() => action()} className="button w-full flex flex-col items-center justify-center cursor-pointer bg-accent text-heading2 font-bold text-primary p-4">
            {title}
        </button>
    )
}

export default CustomButton
