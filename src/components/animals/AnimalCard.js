import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    // props: { animal, customer, location }
    <>
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__species">Species: {animal.species}</div>
            <div className="animal__breed">Breed: {animal.breed}</div>
            <address className="animal__location">{animal.location.name}</address>
            <div className="animal__owner">Customer: {animal.customer.name}</div>
            {/* <div className="animal__location">Location: {location.name}</div>
            <div className="animal__owner">Customer: {customer.name}</div> */}
        </section>
    </>
);