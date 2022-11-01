import react from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/questions">Questions</Link></li>
                <li><Link to="/surveys">Surveys</Link></li>
            </ul>
        </>
    )
}

export default Navbar;