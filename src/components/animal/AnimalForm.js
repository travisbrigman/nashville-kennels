import React, { useContext, useRef, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import "./Animals.css"

export const AnimalForm = (props) => {
     const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { animals, getAnimals } = useContext(AnimalContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const name = useRef(null)
    const location = useRef(null)
    const customer = localStorage.getItem("kennel_customer", "")
    const customerInt = parseInt(customer)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getAnimals().then(getLocations)
    }, [])

    const constructNewAnimal = () => {
        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const locationId = parseInt(location.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value,
                locationId,
                customerId: customerInt
            })
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                Make Appointment
            </button>
        </form>
    )
}