import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../locations/LocationProvider";
import "./Location.css";
import { useNavigate } from 'react-router-dom';

export const LocationForm = () => {
  const { addLocation } = useContext(LocationContext);

  const [location, setLocation] = useState({
    name: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleControlledInputChange = (event) => {
    const newLocation = { ...location }
    newLocation[event.target.id] = event.target.value
    setLocation(newLocation)
  };

  const handleClickSaveLocation = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    if (location.name === "" || location.address === "") {
      alert("Please add input values to location name and address!")
    } else {
      const newLocation = {
        name: location.name,
        address: location.address,
      }
      addLocation(newLocation)
        .then(() => navigate("/locations"))
    }
  };

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name" value={location.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Location address:</label>
          <input type="text" id="address" required autoFocus className="form-control" placeholder="Location address" value={location.address} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveLocation}>
        Save Location
      </button>
      <button onClick={() => {navigate("/locations")}}>
        Cancel
      </button>
    </form>
  )
};