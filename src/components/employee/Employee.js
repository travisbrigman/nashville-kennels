import React from "react"
import "./Employees.css"

export const Employee = ({employee, animalObject, location}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{location.name}</div>
        <div className="employee__animal">{animalObject.name}</div> 
    </section>
)