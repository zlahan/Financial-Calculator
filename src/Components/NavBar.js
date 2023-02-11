import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <nav>
                <nav>
                    <NavLink to="/Home"><button onClick = "#Home" id = "button"> | Home | </button></NavLink>
                    <NavLink to="/Calculate"><button onClick = "#Calculate" id = "button"> | Calculate | </button></NavLink>
                    <NavLink to="/Contact"><button onClick = "#Contact" id = "button"> | Contact | </button></NavLink>
                    <NavLink to="/Login"><button onClick = "#Login" id = "button"> | Login | </button></NavLink>
                </nav>
            </nav>
        </nav>
    )
}

export default NavBar;