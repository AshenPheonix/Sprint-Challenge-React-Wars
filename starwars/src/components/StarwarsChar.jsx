import React from 'react'
import './StarWars.css'
import Film from './Film'

export default function StarwarsChar(props) {
    let name=props.data.name,
        height=props.data.height,
        mass=props.data.mass,
        filmsIn=props.data.films

    return (
        <section
            className="character"
        >
            <h2 className="name"> 
                Name: <span>{name}</span>
            </h2>
            
            <section
                className="statBlock"
            >
                <p>Height: {height}cm</p>
                <p>Mass: {mass}kg</p>
            </section>
            <fieldset>
                <legend>
                    Films
                </legend>
                <ul>
                    {filmsIn.map((film,i)=>
                        <Film
                            filmURL={film}
                            key={i}
                        />
                    )}
                </ul>
            </fieldset>
        </section>
    )
}
