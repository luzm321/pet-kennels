import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();

  useEffect(() => {
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
  }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      <h4>Employees</h4>
      {
        location.employees?.map(employee => {
            return (
                <>
                    <div>{employee.name}</div>
                </>
            )
        })
      }
      <h4>Current Residents</h4>
      {
        location.animals?.map(animal => {
            return (
                <>
                    <div>{animal.name}</div>
                </>
            )
        })
      }
    </section>
  )
};