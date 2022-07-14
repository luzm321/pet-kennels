import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import { Customer } from "./Customer";
import { useNavigate } from "react-router-dom";
import "./Customer.css";

export const CustomerList = () => {

  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(() => {
    getCustomers()
  }, []);


  const navigate = useNavigate();

  return (
    <>
        <h2 className="customer__header">Customers</h2>
        <button onClick={() => {navigate("/customers/create")}}>
          Add Customer
        </button>
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