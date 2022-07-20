import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; //replaces useHistory in react-router-dom v6
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
// import { LocationContext } from "../locations/LocationProvider";
// import { CustomerContext } from "../customers/CustomerProvider";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
  // const { locations, getLocations } = useContext(LocationContext)
  // const { customers, getCustomers } = useContext(CustomerContext)

   // Since you are no longer ALWAYS displaying all of the animals
   const [ filteredAnimals, setFilteredAnimals ] = useState([])

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: Initial render before data")
    getAnimals()
    // .then(getLocations)
    // .then(getCustomers)
  }, []);

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFilteredAnimals(subset)
    } else {
      // If the search field is blank, display all animals
      setFilteredAnimals(animals)
    }
  }, [searchTerms, animals]);

  const navigate = useNavigate();

  return (
    <>
        <h2 className="animal__header">Animals</h2>
        <button onClick={() => {navigate("/animals/create")}}>
            Make Reservation
        </button>
        <div className="animals">
        {console.log("AnimalList: Render", animals)}
        {
            filteredAnimals.map(animal => {
              // const owner = customers.find(c => c.id === animal.customerId)
              // const location = locations.find(l => l.id === animal.locationId)
              return <AnimalCard key={animal.id} animal={animal} />
              //return <AnimalCard key={animal.id} animal={animal} location={location} customer={owner} />
            })
        }
        </div>
    </>
  )
}