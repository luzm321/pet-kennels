import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    <>
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__species">Species: {animal.species}</div>
            <div className="animal__breed">Breed: {animal.breed}</div>
            <address className="location__address">{animal.location.name}</address>
        </section>
    </>
);