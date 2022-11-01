import react from 'react';
import { Link } from "react-router-dom";
import NavLinks from './NavLinks';


const Navbar = () => {
    return(
        <>
            <ul className="navbarClassPlaceholder">
                <NavLinks />
            </ul>
        </>
    )
}

export default Navbar;