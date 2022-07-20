import { Route, Routes } from "react-router-dom"
import { Home } from "./home/Home";
import { AnimalProvider } from "./animals/AnimalProvider";
import { AnimalList } from "./animals/AnimalList";
import { AnimalForm } from "./animals/AnimalForm";
import { AnimalDetail } from "./animals/AnimalDetail";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";
import { LocationForm } from "./locations/LocationForm";
import { CustomerProvider } from "./customers/CustomerProvider";
import { CustomerList } from "./customers/CustomerList";
import { CustomerForm } from "./customers/CustomerForm";
import { CustomerDetail } from "./customers/CustomerDetail";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { EmployeeDetail } from "./employees/EmployeeDetail";




export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Routes>
                            <Route exact path="/animals"  element={<AnimalList />} />
                        </Routes>
                        <Routes>
                            <Route exact path="/animals/create"  element={<AnimalForm />} />
                        </Routes>
                        <Routes>
                            <Route exact path="/animals/detail/:animalId" element={<AnimalDetail />} />
                        </Routes>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <LocationProvider>
                <Routes>
                    <Route path="/locations"  element={<LocationList />} />
                </Routes>
                <Routes>
                    <Route path="/locations/create"  element={<LocationForm />} />
                </Routes>
            </LocationProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Routes>
                        <Route path="/employees"  element={<EmployeeList />} />
                    </Routes>
                    <Routes>
                        <Route path="/employees/create"  element={<EmployeeForm />} />
                    </Routes>
                    <Routes>
                        <Route exact path="/employees/detail/:employeeId" element={<EmployeeDetail />} />
                    </Routes>
                </LocationProvider>
            </EmployeeProvider>
            
            <CustomerProvider>
                <Routes>
                    <Route path="/customers"  element={<CustomerList />} />
                </Routes>
                <Routes>
                    <Route path="/customers/create"  element={<CustomerForm />} />
                </Routes>
                <Routes>
                    <Route exact path="/customers/detail/:customerId" element={<CustomerDetail />} />
                </Routes>
            </CustomerProvider>           
        </>
    )
};