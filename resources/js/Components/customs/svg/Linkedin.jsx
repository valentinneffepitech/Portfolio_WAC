import React from 'react'

export const Linkedin = ({
    size = 100,
    fill = "none",
    stroke = "#fff",
    strokeWidth = 1,
    className = "",
    id = "linkedin"
}) => {
    return (
        <svg id={id} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 24 24`} fill={fill} stroke={stroke} stroke-width={strokeWidth} className={className}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}
