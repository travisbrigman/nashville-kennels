import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeForm } from "./employee/EmployeeForm";

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route path="/animals">
              <AnimalList />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <EmployeeProvider>
        <LocationProvider>
          <AnimalProvider>
            <Route
              exact
              path="/employees"
              render={(props) => <EmployeeList {...props} />}
            />
  
            <Route
              exact
              path="/employees/create"
              render={(props) => <EmployeeForm {...props} />}
            />
              
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>

      <CustomerProvider>
        {/* Render the animal list when http://localhost:3000/customers */}
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>
    </>
  );
};
