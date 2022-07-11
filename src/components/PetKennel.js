//import React from "react"
import { AnimalCard } from "./animal/AnimalCard";
import "./PetKennel.css"

export const PetKennel = () => (
    <>
        <h2>Pet Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville East Location</div>
            <div>2121 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
    </>
);

//export default PetKennel;