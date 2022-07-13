import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import "./Employee.css";

export const EmployeeList = () => {

  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    getEmployees()
  }, []);


  return (
    <>
        <h2 className="employee__header">Employees</h2>
        <div className="employees">
        {
            employees.map(employee => {
            return <Employee key={employee.id} employee={employee} />
            })
        }
        </div>
    </>
  )
}