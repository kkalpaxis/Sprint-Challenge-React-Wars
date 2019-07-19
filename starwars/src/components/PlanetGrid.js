import React, { useEffect, useState } from "react";
import axios from "axios";
import PlanetCard from "./PlanetCard";

export default function PlanetGrid ({ limit }) {
    const [name, setName] = useState([]);
    const [climate, setClimate] = useState([]);
    const [diameter, setDiameter] = useState([]);
    const [gravity, setGravity] = useState([]);
    const [orbital_period, setOrbital_period] = useState([]);
    const [population, setPopulation] = useState([]);

    useEffect(() => {
        axios
        .get(`http swapi.co/api/planets/`)
        .then(response => {
            const name = response.data.name;
            setName(name);
            console.log(name);
            const climate = response.data.climate;
            setClimate(climate);
            console.log(climate);
            const diameter = response.data.diameter;
            setDiameter(diameter);
            console.log(diameter);
            const gravity = response.data.gravity;
            setGravity(gravity);
            console.log(gravity);
            const orbital_period = response.data.orbital_period;
            setOrbital_period(orbital_period);
            console.log(orbital_period);
            const population = response.data.population;
            setPopulation(population);
            console.log(population);
        });
    }, []);

    return (
        <div className="planet-grid">
            <PlanetGrid name={name} climate={climate} diameter={diameter} gravity={gravity} orbital_period={orbital_period} population={population} />
        </div>
    )
}