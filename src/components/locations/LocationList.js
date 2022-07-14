import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { Location } from "./Location";
import { useNavigate } from "react-router-dom";
import "./Location.css";

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - manage side effects
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, []);

  const navigate = useNavigate();

  return (
    <>
        <h2 className="location__header">Locations</h2>
        <button onClick={() => navigate("/locations/create")}>
          Add Location
        </button>
        <div className="locations">
        {console.log("LocationList: Render", locations)}
        {
            locations.map(location => {
            return <Location key={location.id} location={location} />
            })
        }
        </div>
    </>
  )
}