import { Route, Routes } from "react-router-dom"
import { Home } from "./home/Home";
import { AnimalProvider } from "./animals/AnimalProvider";
import { AnimalList } from "./animals/AnimalList";
import { Location } from "./locations/Location";
import { Employee } from "./employees/Employee";
import { Customer } from "./customers/Customer";

export const ApplicationViews = () => {
    return (
        <>
            <AnimalProvider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                        <Route exact path="/animals"  element={<AnimalList />} />
                    <Route path="/locations"  element={<Location />} />

                    <Route path="/employees"  element={<Employee />} />

                    <Route path="/customers"  element={<Customer />} />
                </Routes>
            </AnimalProvider>
        </>
    )
};