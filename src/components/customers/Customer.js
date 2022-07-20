import React from "react"
import { Link } from "react-router-dom"
import "./Customer.css"

export const Customer = ( { customer }) => (
    <>
        <section className="customer">
            <h3 className="customer__name">
                <Link to={`/customers/detail/${customer.id}`}>
                    { customer.name }
                </Link>
            </h3>  
        </section>
    </>
);