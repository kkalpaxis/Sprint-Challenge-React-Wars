import React from "react";

export default function PlanetCard ({ name, climate, diameter, gravity, orbital_period, population }) {
    return (
        <div className="planet-card">
            <p>{name}</p>
            <p>{climate}</p>
            <p>{diameter}</p>
            <p>{gravity}</p>
            <p>{orbital_period}</p>
            <p>{population}</p>
        </div>
    );
}