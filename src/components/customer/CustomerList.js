import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customers.css"


export const CustomerList = () => {
    // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    },[])

    return (
        <div className="customers">
        {
            customers.map(customerObject => <Customer key={customerObject.id} customer={customerObject} />)
        }
        </div>
    )
}