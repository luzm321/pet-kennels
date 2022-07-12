import "./Animal.css"

export const AnimalCard = () => (
    <>
        <h2>Animals</h2>
        <article className="animals">
            <section className="animal">
                <h3 className="animal__name">Doodles</h3>
                <div className="animal__species">Species: Dog</div>
                <div className="animal__breed">Breed: Poodle</div>
            </section>
        </article>
    </>
);