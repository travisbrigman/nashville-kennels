import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employees.css"


export const EmployeeList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    },[getEmployees])

    return (
        <div className="employees">
        {
            employees.map(employeeObject => <Employee key={employeeObject.id} employee={employeeObject} />)
        }
        </div>
    )
}