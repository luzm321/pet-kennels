import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { Location } from "./Location";
import "./Location.css";

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - manage side effects
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, []);


  return (
    <>
        <h2 className="location__header">Locations</h2>
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