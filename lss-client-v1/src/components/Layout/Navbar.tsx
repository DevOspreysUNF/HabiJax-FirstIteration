import react from 'react';
import { Link } from "react-router-dom";
import Brand from './Brand';
import Account from './Account';
import NavLinks from './NavLinks';


const Navbar = () => {
    return(
        <nav>
            <Brand />
            <ul className='navbarul'>
                <NavLinks />
            </ul>
        </nav>
    )
}

export default Navbar;