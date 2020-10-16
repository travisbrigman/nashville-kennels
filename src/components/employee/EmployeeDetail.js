import React, { useState, useEffect, useContext } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employees.css";

export const EmployeeDetail = (props) => {

  const { releaseEmployee, getEmployeeById } = useContext(EmployeeContext);

  const [employee, setEmployee] = useState({location:{name: ""}});

  useEffect(() => {
    const employeeId = parseInt(props.match.params.employeeId);
    getEmployeeById(employeeId).then(
    setEmployee
    )
  }, []);


  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div>Currently working at {employee.location.name}</div>
      <div>
        {employee.animalId === null
          ? "Not assigned to an animal"
          : `Currently taking care of ${employee.name}`}
      </div>
      <button
        className="btn--release"
        onClick={() => {
          releaseEmployee(employee.id).then(() => {
            props.history.push("/employees");
          });
        }}
      >
        Release Employee
      </button>
    </section>
  );
};
