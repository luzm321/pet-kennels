import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../locations/LocationProvider";
import { AnimalContext } from "../animals/AnimalProvider";
import { CustomerContext } from "../customers/CustomerProvider";
import "./Animal.css";
import { useNavigate, useParams } from 'react-router-dom';

export const AnimalForm = () => {
  const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);


  //for edit, hold on to state of animal in this view
  const [animal, setAnimal] = useState({})
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  const navigate = useNavigate();
  // const [animal, setAnimal] = useState({
  //   name: "",
  //   species: "",
  //   breed: "",
  //   locationId: 0,
  //   customerId: 0
  // });

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newAnimal = { ...animal }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newAnimal[event.target.id] = event.target.value
    // update state
    setAnimal(newAnimal)
  };

  // const handleClickSaveAnimal = (event) => {
  //   event.preventDefault(); //Prevents the browser from submitting the form

  //   const locationId = parseInt(animal.locationId)
  //   const customerId = parseInt(animal.customerId)

  //   if (locationId === 0 || customerId === 0) {
  //     window.alert("Please select a location and a customer")
  //   } else {
  //     //Invoke addAnimal passing the new animal object as an argument
  //     //Once complete, change the url and display the animal list

  //     const newAnimal = {
  //       name: animal.name,
  //       species: animal.species,
  //       breed: animal.breed,
  //       locationId: locationId,
  //       customerId: customerId
  //     }
  //     addAnimal(newAnimal)
  //       .then(() => navigate("/animals"))
  //   }
  // };

  const handleSaveAnimal = () => {
    if (parseInt(animal.locationId === 0 || animal.customerId) === 0) {
        window.alert("Please select a location and customer")
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (animalId) {
        //PUT - update
        updateAnimal({
            id: animal.id,
            name: animal.name,
            species: animal.species,
            breed: animal.breed,
            locationId: parseInt(animal.locationId),
            customerId: parseInt(animal.customerId)
        })
        .then(() => navigate(`/animals/detail/${animal.id}`))
      } else {
        //POST - add
        addAnimal({
            name: animal.name,
            species: animal.species,
            breed: animal.breed,
            locationId: parseInt(animal.locationId),
            customerId: parseInt(animal.customerId)
        })
        .then(() => navigate("/animals"))
      }
    }
  };

  
    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
      getCustomers().then(getLocations).then(() => {
        if (animalId) {
          getAnimalById(animalId)
          .then(animal => {
              setAnimal(animal)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, []);

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">{animalId ? "Edit Animal" : "New Animal" }</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Animal name" defaultValue={animal.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal species:</label>
          <input type="text" id="species" required autoFocus className="form-control" placeholder="Animal species" value={animal.species} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal breed:</label>
          <input type="text" id="breed" required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select name="locationId" id="locationId" className="form-control" value={animal.locationId} onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Customer: </label>
          <select name="customer" id="customerId" className="form-control" value={animal.customerId} onChange={handleControlledInputChange}>
            <option value="0">Select a customer</option>
            {customers.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" disabled={isLoading} onClick={(event) => {
        event.preventDefault() // Prevent browser from submitting the form and refreshing the page
        handleSaveAnimal()
      }}>
        {/* Ternary: is there an animalId in the URL? If so, display the Save Animal button, else display the Add Animal button */}
        {animalId ? <div>Save Animal</div> : <div>Add Animal</div> }
      </button>
      <button onClick={() => {navigate("/animals")}}>
        Cancel
      </button>
    </form>
  )
};