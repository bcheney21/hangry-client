import { Link } from "react-router-dom"
import { Navbar } from 'react-bootstrap'
const Nav = ({ user, handleLogout }) => {
    const loggedIn = (
        <>
            <li>
                <Link to="/profile">
                    Profile
                </Link>
            </li>
            <li>
                <Link to="/">
                    <span onClick={handleLogout}>Logout</span>
                </Link>
            </li>
            <li>
                <Link to="/restaurants">
                    Restaurants near you
                </Link>
            </li>
            <li>
                <Link to="/favorites">
                    Your Favorites
                </Link>
            </li>
        </>
    )
    const navStyle = {
        backgroundColor: 'orange'
    }
    const loggedOut = (
        <li>
            <Link to="/login">Login</Link>
        </li>
    )
    return (
        <Navbar style={navStyle} className="text-center">
        {/* <Navbar bg="dark" variant="dark" className="text-center"> */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                { user ? loggedIn : loggedOut}
            </ul>
        </Navbar>
    )
}

export default Nav