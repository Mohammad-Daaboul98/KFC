import Sidebar from './Sidebar';
import classes from './Nav.module.css'
import logo from '../asset/logo.svg';

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <Sidebar />
            <div className={classes.nav_logo}>
                <img src={logo} alt='logo' className={classes.nav__icon} />
            </div>

        </nav>
    );
}

export default Nav;