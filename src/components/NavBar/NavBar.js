import style from './NavBar.module.css';
import logo from "./../../images/logos_black.png";
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <div className={style["navbar-top"]}>

            <nav className={style.stroke}>
                <img src={logo} alt='logo'></img>
                <ul>
                    {/* <li><img src={logo} alt='logo'></img></li> */}
                    <li><a href="#" className={style.active}>Home</a></li>
                    <li><Link to='about' spy={true} smooth={true}>About</Link></li>
                    {/* <li><a href="#">About</a></li> */}
                    <li><Link to='services' spy={true} smooth={true}>Services</Link></li>
                    {/* <li><a href="#">Services</a></li> */}
                    <li><a href="#">Experts</a></li>
                    <li><a href="#">Contcat Us</a></li>
                </ul>
            </nav>

        </div >
    );
}

export default NavBar;