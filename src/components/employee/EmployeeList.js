import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Link } from "react-router-dom"
import "./Employees.css"

export const EmployeeList = props => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="employees">
            <h1>Employees</h1>

            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>

            <article className="employeeList">
                {
                    employees.map(employee => {
                        return <section className="employee" key={employee.id}>
                                <Link  to={`/employees/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
                        </section> 
                    })
                }
            </article>
        </div>
    )
}