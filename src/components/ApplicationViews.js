import { Route, Routes } from "react-router-dom"
import { Home } from "./home/Home";
import { AnimalProvider } from "./animals/AnimalProvider";
import { AnimalList } from "./animals/AnimalList";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";
import { CustomerProvider } from "./customers/CustomerProvider";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { EmployeeList } from "./employees/EmployeeList";


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>

            <AnimalProvider>
                <Routes>
                    <Route exact path="/animals"  element={<AnimalList />} />
                </Routes>
            </AnimalProvider>

            <LocationProvider>
                <Routes>
                    <Route path="/locations"  element={<LocationList />} />
                </Routes>
            </LocationProvider>

            <EmployeeProvider>
                <Routes>
                    <Route path="/employees"  element={<EmployeeList />} />
                </Routes>
            </EmployeeProvider>
            
            <CustomerProvider>
            <Routes>
                <Route path="/customers"  element={<CustomerList />} />
            </Routes>
            </CustomerProvider>           
        </>
    )
};