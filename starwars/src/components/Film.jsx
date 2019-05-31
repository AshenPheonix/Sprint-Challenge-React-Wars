import React from 'react'

export default function Film(props) {
    console.log(props.filmURL)

    return (
        <li>
            Url where Info is Available: <span>{props.filmURL}</span>
        </li>
    )
}
