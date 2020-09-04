import React from "react"
import "./Animals.css"

export const Animal = ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">{ animal.name }</h3>
        <div className="animal__breed">{ animal.breed }</div>
        <div className="animal__location">{ location.name }</div>
        <div className="animal__owner">{ customer.name }</div>
    </section>
)