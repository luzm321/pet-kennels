//import React from "react"
import { AnimalCard } from "./animals/AnimalCard";
import { Location } from "./locations/Location";
import { Employee } from "./employees/Employee";
import { Customer } from "./customers/Customer";
import { WelcomeUser } from "./WelcomeUser";
import "./PetKennel.css"

export const PetKennel = () => (
    <>
        <h2>Pet Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville East Location</div>
            <div>2121 Puppy Way</div>
        </address>

        <WelcomeUser userName="Luz" />

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
);

//export default PetKennel;