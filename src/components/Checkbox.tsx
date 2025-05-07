import React from 'react'

function Checkbox() {
    return (
        <input
            className="
        peer relative appearance-none shrink-0 w-[15px] h-[15px] border-2 border-accent   bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
        checked:bg-accent cursor-pointer
        disabled:border-steel-400 disabled:bg-steel-400
      "
            type="checkbox"
        />
    )
}

export default Checkbox
