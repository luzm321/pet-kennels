import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import { Customer } from "./Customer";
import "./Customer.css";

export const CustomerList = () => {

  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(() => {
    getCustomers()
  }, []);


  return (
    <>
        <h2 className="customer__header">Customers</h2>
        <div className="customers">
        {
            customers.map(customer => {
            return <Customer key={customer.id} customer={customer} />
            })
        }
        </div>
    </>
  )
};