import React, { useContext, useEffect, useState } from "react";
import { CustomerContext } from "../customers/CustomerProvider";
import "./Customer.css";
import { useNavigate } from 'react-router-dom';

export const CustomerForm = () => {
  const { addCustomer } = useContext(CustomerContext);

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleControlledInputChange = (event) => {
    const newCustomer = { ...customer }
    newCustomer[event.target.id] = event.target.value
    setCustomer(newCustomer)
  };

  const handleClickSaveCustomer = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    if (customer.name === "" || customer.address === "") {
      alert("Please add input values to customer name and address!")
    } else {
      const newCustomer = {
        name: customer.name,
        address: customer.address,
      }
      addCustomer(newCustomer)
        .then(() => navigate("/customers"))
    }
  };

  return (
    <form className="customerForm">
      <h2 className="customerForm__title">New Customer</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Customer name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Customer name" value={customer.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Customer address:</label>
          <input type="text" id="address" required autoFocus className="form-control" placeholder="Customer address" value={customer.address} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveCustomer}>
        Save Customer
      </button>
      <button onClick={() => {navigate("/customers")}}>
        Cancel
      </button>
    </form>
  )
};