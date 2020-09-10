import React from "react"
import "./Animals.css"
import { Link } from "react-router-dom"

export default ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/Animals/${animal.id}`}>
                { animal.name }
            </Link>
        </h3>
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)


/*
import React from "react"
import "./Animals.css"

export const Animal = ({ Animal, customer, location }) => (
    <section className="Animal">
        <h3 className="Animal__name">{ Animal.name }</h3>
        <div className="Animal__breed">{ Animal.breed }</div>
        <div className="Animal__location">{ location.name }</div>
        <div className="Animal__owner">{ customer.name }</div>
    </section>
)
*/