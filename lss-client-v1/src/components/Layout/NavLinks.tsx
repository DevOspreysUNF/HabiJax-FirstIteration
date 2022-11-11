import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const {pathname} = useLocation();
    
    return(
        <>
            <li className="navbarli"><Link to="/" className={(pathname === '/') ? 'navliactive' : 'navbarli'}>Home</Link></li>
            <li className="navbarli"><Link to="/questions" className={(pathname === '/questions') ? 'navliactive' : 'navbarli'}>Questions</Link></li>
            <li className="navbarli"><Link to="/surveys" className={(pathname === '/surveys') ? 'navliactive' : 'navbarli'}>Surveys</Link></li>
            <li className="navbarli"><Link to="/admin" className={(pathname === '/admin') ? 'navliactive' : 'navbarli'}>Admin</Link></li>
            <li className="navbarli"><Link to="/account" className={(pathname === '/account') ? 'navliactive' : 'navbarli'}>Account</Link></li>
        </>
    )
}

export default NavLinks;

