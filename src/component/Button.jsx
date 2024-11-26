import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="border border-orange-400 text-black px-2 py-3 rounded-md text-center hover:bg-orange-100 focus:outline-none"
        >
            {text}
        </button>
    )
}

export default Button