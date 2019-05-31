import React from 'react'
import './StarWars.css'
import StarwarsChar from './StarwarsChar'

export default function StarwarsCharacters(props) {
    
    return (
        <section
            className="char-list"
        >
            {props.chars.map((charData,i)=>(
                <StarwarsChar
                    data={charData}
                    key={i}
                />
            ))}
        </section>
    )
}
