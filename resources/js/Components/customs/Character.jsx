import React from 'react'

export const Character = ({
        className
    }) => {
    return (
        <svg viewBox="0 0 100 100" id="character" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g id="armRight">
                <path d="M75 70 l10 5 v25 l-10 0 Z" />
                <path d="M75 70 h10 l10 5 h-10 Z" />
                <rect x="85" y="75" height="25" width="10" />
            </g>
            <g id="body">
                <path d="M90 70 l-20 -10 v40 h20" />
                <path d="M90 70 l-20 -10 h-60 l20 10 Z" />
                <rect x="30" y="70" width="60" height="30" />
                <path d="M30 70 l-20 -10 v40 h20" />
            </g>
            <g id="armLeft">
                <path d="M5 75 l10 5 v25 l-10 0 Z" />
                <path d="M5 75 h10 l10 5 h-10 Z" />
                <rect x="15" y="80" height="25" width="10" />
            </g>
            <g id="head">
                <path d="M40 68 l-15 -7 v-30 l15 7 Z" />
                <path d="M40 38 h30 l-15 -7 h-30 Z" />
                <rect x="40" y="38" height="30" width="30" />
            </g>
            <g id="hair">
                <path d="M39 45 l-3 -5 l-3 3 l-3 -5 l-3 3 l-2 -5 l-3 4 v-10 l18 8 Z" />
                <path d="M40 45 v-8 h32 v8 l-3 -3 l-3 3 l-3 -3 l-3 3 l-3 -3 l-3 3 l-3 -3 l-3 3 l-3 -3 l-3 3 l-2 -2 Z" />
                <path d="M40 38 l-18 -8 h35 l15 7 Z" />
            </g>
            <g id="face">
                <rect x="50" y="50" height="3" width="3" />
                <rect x="60" y="50" height="3" width="3" />
                <rect x="52" y="60" height="3" width="10" />
            </g>
        </svg>
    )
}
