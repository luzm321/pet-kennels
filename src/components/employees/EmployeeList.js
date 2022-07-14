import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import { useNavigate } from "react-router-dom";
import "./Employee.css";

export const EmployeeList = () => {

  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    getEmployees()
  }, []);

  const navigate = useNavigate();

  return (
    <>
        <h2 className="employee__header">Employees</h2>
        <button onClick={() => {navigate("/employees/create")}}>
          Add Employee
        </button>
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