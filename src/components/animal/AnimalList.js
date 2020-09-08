import React, { useContext, useEffect } from "react"
import { Animal } from "./Animal"
import "./Animals.css"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"


export const AnimalList = (props) => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getAnimals()
        getLocations()
        getCustomers()
    },[])

    return (
        <div className="animals">
            <button onClick={() => props.history.push("/animals/create")}>
            {/* <button onClick={() => props.history.push("/animals/create")}> */}
                Make Appointment
            </button>
        {
            animals.map(animalObject => {
                const owner = customers.find(c => c.id === animalObject.customerId) || {}
                const clinic = locations.find(loc => loc.id === animalObject.locationId) || {}
                
              return <Animal key={animalObject.id} 
                            animal={animalObject} 
                            location={clinic} 
                            customer={owner} />
            })
        }
        </div>
    )
}