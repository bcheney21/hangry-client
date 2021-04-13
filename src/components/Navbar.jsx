import { Link } from "react-router-dom"

const Navbar = ({ user, handleLogout }) => {
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
    const loggedOut = (
        <li>
            <Link to="/login">Login</Link>
        </li>
    )
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                { user ? loggedIn : loggedOut}
            </ul>
        </nav>
    )
}

export default Navbar