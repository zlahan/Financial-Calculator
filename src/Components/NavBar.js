import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <nav>
                <nav>
                    <NavLink to="/Home"><button onClick = "#Home" id = "button"> | Home sweet home | </button></NavLink>
                    <NavLink to="/Calculate"><button onClick = "#Calculate" id = "button"> | Calculate lul | </button></NavLink>
                    <NavLink to="/Contact"><button onClick = "#Contact" id = "button"> | Contact hehe | </button></NavLink>
                    <NavLink to="/Login"><button onClick = "#Login" id = "button"> | Login :D | </button></NavLink>
                    <NavLink to="/Register"><button onClick = "#Register" id = "button"> | Register! | </button></NavLink>
                    <NavLink to="/Userdetails"><button onClick = "#Userdetails" id = "button"> | Yo Detailz | </button></NavLink>
                </nav>
            </nav>
        </nav>
    )
}

export default NavBar;