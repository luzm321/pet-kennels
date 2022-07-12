import { Route, Routes } from "react-router-dom"
import { Home } from "./home/Home";
import { AnimalCard } from "./animals/AnimalCard";
import { Location } from "./locations/Location";
import { Employee } from "./employees/Employee";
import { Customer } from "./customers/Customer";

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="/animals"  element={<AnimalCard />} />

                <Route path="/locations"  element={<Location />} />

                <Route path="/employees"  element={<Employee />} />

                <Route path="/customers"  element={<Customer />} />
            </Routes>
        </>
    )
};