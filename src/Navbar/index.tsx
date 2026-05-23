import './styles.css'
import logo from './logo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="main-navbar">
            <img src={logo} alt="DS Delivery" />
            <Link to="/" className="logo-text"> DS Delivery </Link>
        </nav>
    )
}

export default Navbar
