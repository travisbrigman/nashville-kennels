import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employees.css"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../location/LocationProvider"


export const EmployeeList = (props) => {
    // This state changes when `getAnimals()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getEmployees()
        getLocations()
        getAnimals()
    },[])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
    {employees.map(employee =>{
                       const animal = animals.find(animalObject => animalObject.id === employee.animalId) || {}
                       const clinic = locations.find(loc => loc.id === employee.locationId) || {}
        
        return <Employee key={employee.id} animalObject={animal} employee={employee} location={clinic} />})}
            </article>
        </div>
    )
}