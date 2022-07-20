import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useNavigate } from "react-router-dom"

export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

	const [animal, setAnimal] = useState({})

	const {animalId} = useParams();

  useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
  }, [])

  const navigate = useNavigate();

  const handleRelease = () => {
    releaseAnimal(animal.id)
      .then(() => {
        navigate("/animals")
      })
  }

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__species">Species: {animal.species}</div>
      <div className="animal__breed">Breed: {animal.breed}</div>
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button onClick={() => {
        navigate(`/animals/edit/${animal.id}`)}}>
          Edit
      </button>
      <button onClick={handleRelease}>Release Animal</button>
    </section>
  )
};