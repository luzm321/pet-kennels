import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../locations/LocationProvider";
import { EmployeeContext } from "../employees/EmployeeProvider";
import "./Employee.css";
import { useNavigate } from 'react-router-dom';

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);


  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    getLocations()
  }, []);

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEmployee = { ...employee }
    /* Employee is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEmployee[event.target.id] = event.target.value
    // update state
    setEmployee(newEmployee)
  };

  const handleClickSaveEmployee = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const locationId = parseInt(employee.locationId)

    if (locationId === 0) {
      alert("Please select a location")
    } else {
      //Invoke addEmployee passing the new employee object as an argument
      //Once complete, change the url and display the employee list

      const newEmployee = {
        name: employee.name,
        locationId: locationId,
      }
      addEmployee(newEmployee)
        .then(() => navigate("/employees"))
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" value={employee.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
      </button>
      <button onClick={() => {navigate("/employees")}}>
        Cancel
      </button>
    </form>
  )
};