import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"; //Redirect replaced by Navigate()

import "./NavBar.css";

export const NavBar = (props) => {
    return (
        <Routes>
            <Route path="/*" element={
                <ul className="navbar">
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/">Pet Kennels</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/locations">Locations</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/animals">Animals</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/customers">Customers</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/employees">Employees</Link>
                    </li>
                </ul>
                }
            />
        </Routes>
    )
};