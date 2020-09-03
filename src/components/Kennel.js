import React from "react";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import "./Kennel.css";
import { AnimalList } from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";

export const Kennel = () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>

    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>

    <h2>Animals</h2>
    <AnimalProvider>
      <AnimalList />
    </AnimalProvider>

    <h2>Customers</h2>
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>

    <h2>Employees</h2>
    <EmployeeProvider>
      <EmployeeList />
    </EmployeeProvider>
  </>
);
