import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //replaces useHistory in react-router-dom v6
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
// import { LocationContext } from "../locations/LocationProvider";
// import { CustomerContext } from "../customers/CustomerProvider";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  // const { locations, getLocations } = useContext(LocationContext)
  // const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: Initial render before data")
    getAnimals()
    // .then(getLocations)
    // .then(getCustomers)
  }, []);

  const navigate = useNavigate();

  return (
    <>
        <h2 className="animal__header">Animals</h2>
        <button onClick={() => {navigate("/animals/create")}}>
            Add Animal
        </button>
        <div className="animals">
        {console.log("AnimalList: Render", animals)}
        {
            animals.map(animal => {
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