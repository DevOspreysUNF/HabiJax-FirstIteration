import { Link } from "react-router-dom";

const NavLinks = () => {
    return(
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/questions">Questions</Link></li>
            <li><Link to="/surveys">Surveys</Link></li>
        </>
    )
}

export default NavLinks;

